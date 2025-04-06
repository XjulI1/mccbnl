<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { authHelper } from '@/utils/authHelper'

const router = useRouter()
const isAuthenticated = authHelper.isAuthenticated
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link to="/">mCcBnL</router-link>
      </div>
      <div class="navbar-links">
        <router-link to="/settings" v-if="isAuthenticated">Paramètres</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar-links .router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
