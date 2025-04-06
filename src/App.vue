<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
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
  min-height: 100vh;
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
</style>

<style scoped></style>
