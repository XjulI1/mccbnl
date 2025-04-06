<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Styles globaux pour toute l'application */
html,
body {
  font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

* {
  font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  box-sizing: border-box;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: inherit;
}

.app-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>

<style scoped></style>
