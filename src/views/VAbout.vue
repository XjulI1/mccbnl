<template>
  <div class="about-page">
    <div class="about-container">
      <h1>À propos</h1>

      <div class="content-section">
        <div class="contributors">
          <h2>Contributeurs</h2>
          <p>
            Ce projet est le résultat d'une collaboration entre un développeur humain et Claude 3.7
            Sonnet (au travers de Github Copilot et VS Code), un assistant IA. Cette approche
            collaborative permet de combiner l'expertise humaine et les capacités d'intelligence
            artificielle pour optimiser le développement.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--min-height);
  background-color: var(--background-color);
}

.about-container {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 800px;
}

h1 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  text-align: center;
}

h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.content-section {
  margin-top: 1.5rem;
}

.contributors {
  margin-top: 10px;
}

.contributors p {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
}
</style>
