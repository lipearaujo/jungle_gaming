import { UserAlreadyExistsError } from '#/errors/authErros'
import { storedUserSchemaArray } from '#/schemas/storedUserSchema'
import type StoredUser from '#/types/storedUser'

// listar usuarios
export const users = (): StoredUser[] => {
  const storedUsers = localStorage.getItem('users')

  if (!storedUsers) return []

  return storedUserSchemaArray.parse(JSON.parse(storedUsers))
}

// criar usuario
export const createUser = (data: StoredUser): StoredUser => {
  const { email } = data

  const getUsers = users()

  const verifyEmail = getUsers.find((user) => user.email === email)

  if (verifyEmail) {
    throw new UserAlreadyExistsError('Usuário já cadastrado')
  }

  getUsers.push(data)

  localStorage.setItem('users', JSON.stringify(getUsers))

  return data
}

// buscar por email
export const findByEmail = (email: string): StoredUser | null => {
  const getUsers = users()

  const findUser = getUsers.find((user) => user.email === email)

  return findUser ? findUser : null
}

// busca por email
export const findById = (id: string): StoredUser | null => {
  const getUsers = users()

  const findUser = getUsers.find((user) => user.id === id)

  return findUser ? findUser : null
}
