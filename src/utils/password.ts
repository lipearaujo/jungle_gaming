type PasswordHashResult = {
  salt: string
  passwordHash: string
}

export const hashPassword = async (
  password: string,
): Promise<PasswordHashResult> => {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const encoder = new TextEncoder()

  const key = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )

  const passwordHash = await window.crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt,
      iterations: 600000,
    },
    key,
    256,
  )

  return {
    salt: arrayBufferToBase64(salt),
    passwordHash: arrayBufferToBase64(passwordHash),
  }
}

export const verifyPassword = async (
  password: string,
  salt: string,
  passwordHash: string,
): Promise<boolean> => {
  const saltUint8Array = base64ToUint8Array(salt)
  const encoder = new TextEncoder()
  const key = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )

  const derivedHash = await window.crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt: saltUint8Array,
      iterations: 600000,
    },
    key,
    256,
  )

  return arrayBufferToBase64(derivedHash) === passwordHash
}

export const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer | Uint8Array) => {
  const bytes = new Uint8Array(arrayBuffer)
  let bin = ''

  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i])
  }

  return window.btoa(bin)
}

export const base64ToUint8Array = (base64String: string) => {
  const binaryString = window.atob(base64String)
  const bytes = new Uint8Array(binaryString.length)

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }

  return bytes
}
