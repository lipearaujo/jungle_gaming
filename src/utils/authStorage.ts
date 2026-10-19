export const getToken = () => {
  const token = localStorage.getItem('token')

  if (!token) return null

  return token
}

export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const deleteToken = () => {
  localStorage.removeItem('token')
}
