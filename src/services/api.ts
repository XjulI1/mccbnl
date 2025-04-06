import { getApiUrl } from '../utils/environment'
import { getItem, LocalStorageKeys } from '../utils/localStorage'

interface LoginResponse {
  id: string
  userId: string
}

export async function login(code: string): Promise<LoginResponse> {
  const API_URL = getApiUrl()
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })

  if (!response.ok) {
    throw new Error("Échec de l'authentification")
  }

  return response.json()
}

export async function whoAmI(): Promise<string> {
  const API_URL = getApiUrl()
  const token = getItem(LocalStorageKeys.AUTH_TOKEN)
  if (!token) {
    throw new Error('Non authentifié')
  }

  const response = await fetch(`${API_URL}/users/whoAmI`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Échec de récupération des informations utilisateur')
  }

  return response.json()
}
