import { api } from '#/lib/axios'
import type AuthResponse from '#/types/authResponse'
import type LoginRequest from '#/types/loginRequest'
import type RegisterRequest from '#/types/registerRequest'
import type User from '#/types/user'

export const fetchRegister = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const response = await api.post<{ data: AuthResponse }>(
    '/auth/register',
    data,
  )

  return response.data.data
}

export const fetchLogin = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post<{ data: AuthResponse }>('/auth/login', data)

  return response.data.data
}

export const fetchLogout = async () => {
  await api.post('/auth/logout')
}

export const fetchCurrentUser = async (): Promise<User> => {
  const response = await api.get<{ user: User }>('/auth/me')

  return response.data.user
}
