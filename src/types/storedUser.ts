import type User from './user'

export default interface StoredUser extends User {
  salt: string
  passwordHash: string
}
