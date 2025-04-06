/**
 * Helper pour gérer le localStorage avec typage et gestion des erreurs
 */

// Clés utilisées dans le localStorage
export enum LocalStorageKeys {
  AUTH_TOKEN = 'auth_token',
  USER_ID = 'user_id',
  USER_PREFERENCES = 'user_preferences',
}

/**
 * Récupère une valeur du localStorage
 * @param key - Clé de l'élément à récupérer
 * @returns La valeur stockée ou null si elle n'existe pas
 */
export function getItem(key: LocalStorageKeys | string): string | null {
  try {
    return localStorage.getItem(key)
  } catch (error) {
    console.error(`Erreur lors de la récupération de ${key} dans localStorage:`, error)
    return null
  }
}

/**
 * Stocke une valeur dans le localStorage
 * @param key - Clé de l'élément à stocker
 * @param value - Valeur à stocker
 * @returns true si le stockage a réussi, false sinon
 */
export function setItem(key: LocalStorageKeys | string, value: string): boolean {
  try {
    localStorage.setItem(key, value)
    return true
  } catch (error) {
    console.error(`Erreur lors du stockage de ${key} dans localStorage:`, error)
    return false
  }
}

/**
 * Supprime une valeur du localStorage
 * @param key - Clé de l'élément à supprimer
 * @returns true si la suppression a réussi, false sinon
 */
export function removeItem(key: LocalStorageKeys | string): boolean {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Erreur lors de la suppression de ${key} dans localStorage:`, error)
    return false
  }
}

/**
 * Vérifie si une clé existe dans le localStorage
 * @param key - Clé à vérifier
 * @returns true si la clé existe, false sinon
 */
export function hasItem(key: LocalStorageKeys | string): boolean {
  return getItem(key) !== null
}

/**
 * Vide complètement le localStorage
 * @returns true si le nettoyage a réussi, false sinon
 */
export function clear(): boolean {
  try {
    localStorage.clear()
    return true
  } catch (error) {
    console.error('Erreur lors du nettoyage du localStorage:', error)
    return false
  }
}

/**
 * Stocke un objet JSON dans le localStorage
 * @param key - Clé de l'élément à stocker
 * @param value - Objet à stocker
 * @returns true si le stockage a réussi, false sinon
 */
export function setObject<T>(key: LocalStorageKeys | string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value)
    return setItem(key, serialized)
  } catch (error) {
    console.error(`Erreur lors du stockage de l'objet ${key} dans localStorage:`, error)
    return false
  }
}

/**
 * Récupère un objet JSON du localStorage
 * @param key - Clé de l'élément à récupérer
 * @returns L'objet stocké ou null s'il n'existe pas ou si une erreur survient
 */
export function getObject<T>(key: LocalStorageKeys | string): T | null {
  try {
    const serialized = getItem(key)
    if (!serialized) return null
    return JSON.parse(serialized) as T
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'objet ${key} dans localStorage:`, error)
    return null
  }
}
