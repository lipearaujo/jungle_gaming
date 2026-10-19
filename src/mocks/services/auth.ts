import {
  InvalidCredentialsError,
  InvalidSessionError,
  InvalidStoredDataError,
} from '#/errors/authErros'
import type AuthResponse from '#/types/authResponse'
import type LoginRequest from '#/types/loginRequest'
import type RegisterRequest from '#/types/registerRequest'
import type StoredUser from '#/types/storedUser'
import type User from '#/types/user'
import { hashPassword, verifyPassword } from '#/utils/password'
import { generateToken } from '#/utils/token'
import { createSessionRecord, findSessionByToken } from '../data/session'
import { createUser, findByEmail, findById } from '../data/users'

export const registerUser = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const { name, email, password } = data

  const id = window.crypto.randomUUID()
  const hashedPassword = await hashPassword(password)

  const storedUser: StoredUser = {
    id,
    name,
    email,
    salt: hashedPassword.salt,
    passwordHash: hashedPassword.passwordHash,
  }

  const token = createSession(id)

  const createdUser = createUser(storedUser)
  const { salt, passwordHash, ...user } = createdUser

  return { user, token }
}

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  const { email, password } = data

  const findUser = findByEmail(email)

  if (findUser === null)
    throw new InvalidCredentialsError('Usuário ou senha inválidos.')

  const isPasswordValid = await verifyPassword(
    password,
    findUser.salt,
    findUser.passwordHash,
  )

  if (isPasswordValid === false)
    throw new InvalidCredentialsError('Usuário ou senha inválidos.')

  const token = createSession(findUser.id)
  const { salt, passwordHash, ...user } = findUser

  return { user, token }
}

export const createSession = (userId: string) => {
  const token = generateToken()

  createSessionRecord(userId, token)

  return token
}

export const isAuthenticated = (token: string): User => {
  // busca token
  const verifyAuthorization = findSessionByToken(token)

  // verifica se a resposta é undefined
  if (verifyAuthorization === undefined)
    throw new InvalidSessionError('Usuário não autenticado.')

  // se a resposta for uma sessao, busca os dados
  // do usuario a partir do userId retornado
  const findUser = findById(verifyAuthorization.userId)

  // verifica existencia de usuario
  if (findUser === null)
    throw new InvalidStoredDataError('Usuário não encontrado.')

  // retorna dados publicos
  const { salt, passwordHash, ...user } = findUser

  return user
}
