const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ProfileResponse {
  id: string;
  googleId: string;
  name: string;
  email: string;
  picture: string;
  createdAt: string;
}

export interface ApiError {
  error: string;
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = new Headers(options.headers || {});
  
  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch (networkError: unknown) {
    if (networkError instanceof TypeError && networkError.message === 'Failed to fetch') {
      throw new Error(`Unable to connect to Islam24 backend API (${url}). Please verify network connection or backend CORS configuration.`);
    }
    throw networkError;
  }

  if (response.status === 204) {
    return {} as T;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = (data as ApiError).error || `HTTP error ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return data as T;
}

export const api = {
  // POST /api/v1/auth/google
  googleAuth: (idToken: string): Promise<AuthResponse> => {
    return request<AuthResponse>('/api/v1/auth/google', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    });
  },

  // POST /api/v1/auth/refresh
  refreshToken: (refreshToken: string): Promise<RefreshResponse> => {
    return request<RefreshResponse>('/api/v1/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  // POST /api/v1/auth/logout
  logout: (refreshToken: string): Promise<void> => {
    return request<void>('/api/v1/auth/logout', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  // GET /api/v1/profile/me
  getProfile: (accessToken: string): Promise<ProfileResponse> => {
    return request<ProfileResponse>('/api/v1/profile/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  // DELETE /api/v1/profile/me
  deleteProfile: (accessToken: string): Promise<void> => {
    return request<void>('/api/v1/profile/me', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
