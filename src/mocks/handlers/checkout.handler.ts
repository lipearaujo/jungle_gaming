import { AuthError, InvalidSessionError } from '#/errors/authErros'
import { http, HttpResponse } from 'msw/http'
import { isAuthenticated } from '../services/auth'
import { createUserPurchases, getUserPurchases } from '../data/purchases'
import { checkoutSchemaArray } from '#/schemas/checkoutSchema'

export const checkoutHandlers = [
  http.post('/api/purchases', async ({ request }) => {
    try {
      const headers = request.headers.get('Authorization')

      if (!headers || !headers.startsWith('Bearer '))
        throw new InvalidSessionError('Usuário não autenticado.')

      const token = headers.split(' ')[1]
      if (!token) throw new InvalidSessionError('Token não encontrado.')
      const user = isAuthenticated(token)

      const body = await request.json()
      const isValidData = checkoutSchemaArray.safeParse(body)

      if (!isValidData.success) {
        return HttpResponse.json(
          {
            errorName: 'Bad Request',
            errors: isValidData.error.issues,
          },
          { status: 400 },
        )
      }

      const checkout = createUserPurchases(user, isValidData.data)

      return HttpResponse.json(
        {
          purchased: checkout,
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

      return HttpResponse.json(
        {
          errorName: 'Internal Server Error',
          errorMessage: 'Erro interno ao processar a compra.',
        },
        { status: 500 },
      )
    }
  }),

  http.get('/api/purchases', ({ request }) => {
    try {
      const headers = request.headers.get('Authorization')

      if (!headers || !headers.startsWith('Bearer '))
        throw new InvalidSessionError('Usuário não autenticado.')

      const token = headers.split(' ')[1]

      if (!token) throw new InvalidSessionError('Token não encontrado.')
      const user = isAuthenticated(token)

      const purchases = getUserPurchases(user.id)

      return HttpResponse.json(
        {
          purchases,
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
]
