<script setup lang="ts">
import { useRouter } from 'vue-router'
import LogoutButton from '../components/LogoutButton.vue'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <div class="settings-page">
    <div class="settings-container">
      <h1>Paramètres</h1>

      <div class="settings-section">
        <h2>Navigation</h2>
        <button class="settings-button about-button" @click="goToAbout">
          À propos de l'application
        </button>
      </div>

      <div class="settings-section">
        <h2>Session</h2>
        <LogoutButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--min-height);
  background-color: var(--background-color);
  padding: 1rem;
}

.settings-container {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 600px;
}

h1 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-align: center;
}

h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.settings-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.settings-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.settings-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  margin-bottom: 0.5rem;
  text-align: left;
}

.settings-button:hover {
  background-color: var(--border-color);
}

.about-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  text-align: center;
}

.about-button:hover {
  background-color: #3a5a85;
}
</style>
