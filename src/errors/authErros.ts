export class AuthError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message)
    this.name = new.target.name
  }
}

export class UserAlreadyExistsError extends AuthError {
  constructor(message: string) {
    super(message, 409)
  }
}

export class InvalidCredentialsError extends AuthError {
  constructor(message: string) {
    super(message, 401)
  }
}

export class InvalidStoredDataError extends AuthError {
  constructor(message: string) {
    super(message, 500)
  }
}

export class InvalidSessionError extends AuthError {
  constructor(message: string) {
    super(message, 401)
  }
}

export class PurchaseError extends AuthError {
  constructor(message: string) {
    super(message, 400)
  }
}
