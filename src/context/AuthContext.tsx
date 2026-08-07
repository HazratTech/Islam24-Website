'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { api, ProfileResponse } from '@/lib/api';

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthContextType {
  user: ProfileResponse | null;
  tokens: AuthTokens | null;
  loading: boolean;
  error: string | null;
  loginWithGoogleIdToken: (idToken: string) => Promise<void>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
  clearError: () => void;
}

const STORAGE_KEY_ACCESS = 'islam24_access_token';
const STORAGE_KEY_REFRESH = 'islam24_refresh_token';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ProfileResponse | null>(null);
  const [tokens, setTokens] = useState<AuthTokens | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const saveTokens = (accessToken: string, refreshToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_ACCESS, accessToken);
      localStorage.setItem(STORAGE_KEY_REFRESH, refreshToken);
    }
    setTokens({ accessToken, refreshToken });
  };

  const clearTokens = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY_ACCESS);
      localStorage.removeItem(STORAGE_KEY_REFRESH);
    }
    setTokens(null);
    setUser(null);
  }, []);

  // Fetch profile using access token with automatic refresh attempt on error
  const fetchProfile = useCallback(async (accessToken: string, refreshToken: string): Promise<ProfileResponse | null> => {
    try {
      const profile = await api.getProfile(accessToken);
      setUser(profile);
      return profile;
    } catch {
      // Access token expired or invalid, attempt refresh token
      if (refreshToken) {
        try {
          const refreshed = await api.refreshToken(refreshToken);
          saveTokens(refreshed.accessToken, refreshed.refreshToken);
          const profile = await api.getProfile(refreshed.accessToken);
          setUser(profile);
          return profile;
        } catch (refreshErr: unknown) {
          clearTokens();
          throw refreshErr;
        }
      } else {
        clearTokens();
        throw new Error('Invalid or expired session');
      }
    }
  }, [clearTokens]);

  // Load initial session profile on client mount (hydration-safe)
  useEffect(() => {
    let active = true;

    const access = localStorage.getItem(STORAGE_KEY_ACCESS);
    const refresh = localStorage.getItem(STORAGE_KEY_REFRESH);

    if (access && refresh) {
      const loadProfile = async () => {
        setLoading(true);
        try {
          const profile = await fetchProfile(access, refresh);
          if (active && profile) {
            setTokens({ accessToken: access, refreshToken: refresh });
          }
        } catch {
          if (active) clearTokens();
        } finally {
          if (active) setLoading(false);
        }
      };
      loadProfile();
    }

    return () => {
      active = false;
    };
  }, [clearTokens, fetchProfile]);

  const loginWithGoogleIdToken = async (idToken: string) => {
    setLoading(true);
    setError(null);
    try {
      const authRes = await api.googleAuth(idToken);
      saveTokens(authRes.accessToken, authRes.refreshToken);
      const profile = await fetchProfile(authRes.accessToken, authRes.refreshToken);
      if (!profile) {
        throw new Error('Failed to retrieve user profile after authentication.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Google sign-in failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      if (tokens?.refreshToken) {
        await api.logout(tokens.refreshToken).catch(() => {});
      }
    } finally {
      clearTokens();
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    if (!tokens?.accessToken) {
      throw new Error('Not authenticated');
    }
    setLoading(true);
    setError(null);
    try {
      await api.deleteProfile(tokens.accessToken);
      clearTokens();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to delete account';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        tokens,
        loading,
        error,
        loginWithGoogleIdToken,
        logout,
        deleteAccount,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
