import { AuthError } from '#/errors/authErros'
import { fetchCurrentUser } from '#/services/auth.service'
import { getToken } from '#/utils/authStorage'
import { redirect } from '@tanstack/react-router'

import type { ParsedLocation } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

type RequiredAuthOptions = {
  context: {
    queryClient: QueryClient
  }
  location: ParsedLocation
}

export const requiredAuth = async ({
  context,
  location,
}: RequiredAuthOptions) => {
  const token = getToken()

  if (!token) {
    throw redirect({
      to: '/login',
      search: {
        returnTo: '/',
        redirect: location.href,
        search: '',
      },
    })
  }

  try {
    const user = await context.queryClient.query({
      queryKey: ['auth', 'me'],
      queryFn: fetchCurrentUser,
    })

    return { user }
  } catch (error) {
    if (error instanceof AuthError) {
      throw redirect({
        to: '/login',
        search: {
          returnTo: '/',
          redirect: location.href,
          search: '',
        },
      })
    }

    throw error
  }
}
