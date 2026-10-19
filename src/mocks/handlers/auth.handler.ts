import { loginSchema, registerSchema } from '#/schemas/authSchema'
import { http, HttpResponse } from 'msw/http'
import { isAuthenticated, loginUser, registerUser } from '../services/auth'
import { AuthError, InvalidSessionError } from '#/errors/authErros'
import { removeSessionByToken } from '../data/session'

export const authHandler = [
  http.post('/api/auth/register', async ({ request }) => {
    try {
      const body = await request.json()
      const isValidData = registerSchema.safeParse(body)

      if (!isValidData.success) {
        return HttpResponse.json(
          {
            errorName: 'Bad Request',
            errors: isValidData.error.issues,
          },
          { status: 400 },
        )
      }

      const register = await registerUser(isValidData.data)

      return HttpResponse.json(
        {
          data: register,
        },
        { status: 201 },
      )
    } catch (error) {
      if (error instanceof AuthError) {
        return HttpResponse.json(
          {
            errorName: error.name,
            errorMessage: error.message,
          },
          { status: error.statusCode },
        )
      }

      if (error instanceof SyntaxError) {
        return HttpResponse.json(
          {
            errorName: 'Bad Request',
            errorMessage: 'Falha de parsing. JSON mal formatado.',
          },
          { status: 400 },
        )
      }

      return HttpResponse.json(
        {
          errorName: 'Internal Server Error',
          errorMessage: 'Falha ao registrar usuário',
        },
        { status: 500 },
      )
    }
  }),

  http.post('/api/auth/login', async ({ request }) => {
    try {
      const body = await request.json()
      const isValidData = loginSchema.safeParse(body)

      if (!isValidData.success) {
        return HttpResponse.json(
          {
            errorName: 'Bad Request',
            errors: isValidData.error.issues,
          },
          {
            status: 400,
          },
        )
      }

      const login = await loginUser(isValidData.data)

      return HttpResponse.json(
        {
          data: login,
        },
        {
          status: 200,
        },
      )
    } catch (error) {
      if (error instanceof AuthError) {
        return HttpResponse.json(
          {
            errorName: error.name,
            errorMessage: error.message,
          },
          {
            status: error.statusCode,
          },
        )
      }

      if (error instanceof SyntaxError) {
        return HttpResponse.json(
          {
            errorName: 'Bad Request',
            errorMessage: 'Falha de parsing. JSON mal formatado.',
          },
          { status: 400 },
        )
      }

      return HttpResponse.json(
        {
          errorName: 'Internal Server Error',
          errorMessage: 'Falha ao efetuar login.',
        },
        { status: 500 },
      )
    }
  }),

  http.get('/api/auth/me', ({ request }) => {
    try {
      const headers = request.headers.get('Authorization')

      if (!headers || !headers.startsWith('Bearer '))
        throw new InvalidSessionError('Usuário não autenticado.')

      const token = headers.split(' ')[1]

      if (!token) throw new InvalidSessionError('Token não encontrado.')
      const user = isAuthenticated(token)

      return HttpResponse.json(
        {
          user,
        },
        { status: 200 },
      )
    } catch (error) {
      if (error instanceof AuthError) {
        return HttpResponse.json(
          {
            errorName: error.name,
            errorMessage: error.message,
          },
          { status: error.statusCode },
        )
      }

      return HttpResponse.json(
        {
          errorName: 'Internal Server Error',
          errorMessage: 'Erro interno ao processar a autenticação.',
        },
        { status: 500 },
      )
    }
  }),

  http.post('/api/auth/logout', ({ request }) => {
    try {
      const headers = request.headers.get('Authorization')

      if (!headers || !headers.startsWith('Bearer '))
        throw new InvalidSessionError('Usuário não autenticado.')

      const token = headers.split(' ')[1]

      if (!token) throw new InvalidSessionError('Token não encontrado.')
      isAuthenticated(token)

      removeSessionByToken(token)

      return HttpResponse.json({}, { status: 200 })
    } catch (error) {
      if (error instanceof AuthError) {
        return HttpResponse.json(
          {
            errorName: error.name,
            errorMessage: error.message,
          },
          { status: error.statusCode },
        )
      }

      return HttpResponse.json(
        {
          errorName: 'Internal Server Error',
          errorMessage: 'Erro interno ao processar a autenticação.',
        },
        { status: 500 },
      )
    }
  }),
]
