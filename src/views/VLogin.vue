<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NumericKeypad from '../components/NumericKeypad.vue'
import { login } from '../services/api'
import { setItem, LocalStorageKeys } from '../utils/localStorage'

const router = useRouter()
const code = ref('')
const error = ref('')
const isLoading = ref(false)

const handleDigitPress = (digit: number) => {
  if (code.value.length < 6) {
    code.value += digit.toString()
  }
}

const handleDeletePress = () => {
  code.value = code.value.slice(0, -1)
}

const handleSubmit = async () => {
  if (code.value.length !== 6) return

  error.value = ''
  isLoading.value = true

  try {
    const response = await login(code.value)
    setItem(LocalStorageKeys.AUTH_TOKEN, response.id)
    setItem(LocalStorageKeys.USER_ID, response.userId)
    router.push('/')
  } catch (err) {
    error.value = 'Code invalide. Veuillez réessayer.'
    code.value = ''
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Connexion</h1>
      <p class="subtitle">Entrez votre code à 6 chiffres</p>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <div class="keypad-container" :class="{ loading: isLoading }">
        <NumericKeypad
          :code="code"
          :onDigitPress="handleDigitPress"
          :onDeletePress="handleDeletePress"
          :onSubmitPress="handleSubmit"
        />

        <div v-if="isLoading" class="loading-overlay">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
}

.login-container {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid var(--border-color);
}

h1 {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.subtitle {
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 2rem;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.keypad-container {
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--background-color), 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
