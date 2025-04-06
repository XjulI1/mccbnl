<script setup lang="ts"></script>

<template>
  <main class="home-page">
    <div class="home-container">
      <h1>Tableau de bord</h1>
      <p class="coming-soon">Contenu en cours de développement</p>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--min-height);
  background-color: var(--background-color);
}

.home-container {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 1000px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.coming-soon {
  color: var(--text-color);
  opacity: 0.7;
  font-style: italic;
}
</style>
