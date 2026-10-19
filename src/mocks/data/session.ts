interface Sessions {
  userId: string
  token: string
}

const getSessions = (): Sessions[] => {
  const storedSessions = localStorage.getItem('sessions')

  if (!storedSessions) return []

  return JSON.parse(storedSessions) as Sessions[]
}

export const createSessionRecord = (userId: string, token: string) => {
  const sessions = getSessions()

  sessions.push({ userId, token })

  localStorage.setItem('sessions', JSON.stringify(sessions))
}

export const findSessionByToken = (token: string) => {
  const sessions = getSessions()

  const findSession = sessions.find((session) => session.token === token)

  return findSession
}

export const removeSessionByToken = (token: string) => {
  const sessions = getSessions()

  localStorage.setItem(
    'sessions',
    JSON.stringify(sessions.filter((session) => session.token !== token)),
  )
}
