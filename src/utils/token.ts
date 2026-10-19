export const generateToken = () => {
  const token = crypto.getRandomValues(new Uint8Array(32))
  const hexString = Array.from(token)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')

  return hexString
}
