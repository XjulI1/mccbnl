// Helper pour accéder aux variables d'environnement
interface EnvConfig {
  API_URL: string
  // Ajouter d'autres variables de configuration au besoin
}

export function getEnvConfig(): EnvConfig {
  // Récupérer la configuration depuis window.env
  return (window as any).env
}

export function getApiUrl(): string {
  return getEnvConfig().API_URL
}
