<script setup lang="ts">
import { useRouter } from 'vue-router'
import { authHelper } from '@/utils/authHelper'
const router = useRouter()

const handleLogout = () => {
  // Suppression du token et de l'ID utilisateur
  authHelper.logout()

  // Redirection vers la page de connexion
  router.push('/login')
}
</script>

<template>
  <button class="logout-button" @click="handleLogout">Se déconnecter</button>
</template>

<style scoped>
.logout-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #f44336;
  color: white;
  border: none;
  text-align: center;
  margin-bottom: 0.5rem;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
