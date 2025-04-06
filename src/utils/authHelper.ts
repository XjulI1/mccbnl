import { getItem, LocalStorageKeys, removeItem } from './localStorage'
import { checkTokenValidity } from '../services/api'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

class AuthHelper {
  private static instance: AuthHelper
  private _isAuthenticated: Ref<boolean> = ref(false)

  private constructor() {}

  public static getInstance(): AuthHelper {
    if (!AuthHelper.instance) {
      AuthHelper.instance = new AuthHelper()
    }
    return AuthHelper.instance
  }

  public async checkAuthentication(): Promise<boolean> {
    const hasToken = !!getItem(LocalStorageKeys.AUTH_TOKEN)

    // Si le token existe, vérifier sa validité via l'API
    let isTokenValid = false
    if (hasToken) {
      isTokenValid = await checkTokenValidity()

      // Si le token n'est plus valide, le supprimer
      if (!isTokenValid) {
        removeItem(LocalStorageKeys.AUTH_TOKEN)
        removeItem(LocalStorageKeys.USER_ID)
      }
    }

    this._isAuthenticated.value = hasToken && isTokenValid
    return this._isAuthenticated.value
  }

  public get isAuthenticated(): ComputedRef<boolean> {
    return computed(() => this._isAuthenticated.value)
  }

  public logout(): void {
    removeItem(LocalStorageKeys.AUTH_TOKEN)
    removeItem(LocalStorageKeys.USER_ID)
    this._isAuthenticated.value = false
  }
}

export const authHelper = AuthHelper.getInstance()
