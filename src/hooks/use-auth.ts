import {
  fetchLogin,
  fetchRegister,
  fetchCurrentUser,
  fetchLogout,
} from '#/services/auth.service'
import type LoginRequest from '#/types/loginRequest'
import type RegisterRequest from '#/types/registerRequest'
import { deleteToken, getToken, setToken } from '#/utils/authStorage'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RegisterRequest) => fetchRegister(data),
    onSuccess: (data) => {
      setToken(data.token)
      queryClient.setQueryData(['auth', 'me'], data.user)
    },
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginRequest) => fetchLogin(data),
    onSuccess: (data) => {
      setToken(data.token)
      queryClient.setQueryData(['auth', 'me'], data.user)
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: fetchLogout,
    onSuccess: () => {
      deleteToken()
      queryClient.removeQueries({ queryKey: ['auth', 'me'] })
    },
  })
}

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchCurrentUser,
    enabled: !!getToken(),
  })
}
