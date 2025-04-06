<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  onDigitPress: (digit: number) => void
  onDeletePress: () => void
  onSubmitPress: () => void
  code: string
}>()

const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Gestionnaire pour les événements clavier
const handleKeydown = (event: KeyboardEvent) => {
  // Vérifier si la touche est un chiffre (0-9)
  if (/^[0-9]$/.test(event.key) && props.code.length < 6) {
    props.onDigitPress(parseInt(event.key))
  }

  // Supprimer avec Backspace ou Delete
  if ((event.key === 'Backspace' || event.key === 'Delete') && props.code.length > 0) {
    props.onDeletePress()
  }

  // Valider avec Enter si le code est complet
  if (event.key === 'Enter' && props.code.length === 6) {
    props.onSubmitPress()
  }
}

// Installer et nettoyer les écouteurs d'événements
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="numeric-keypad">
    <div class="display">
      <div class="code-display">
        <template v-for="(digit, index) in 6" :key="index">
          <span class="code-dot" :class="{ filled: index < code.length }"></span>
        </template>
      </div>
      <button class="delete-button" @click="onDeletePress" :disabled="code.length === 0">⌫</button>
    </div>
    <div class="keypad-grid">
      <button
        v-for="digit in digitsArray"
        :key="digit"
        class="digit-button"
        @click="onDigitPress(digit)"
        :disabled="code.length >= 6"
      >
        {{ digit }}
      </button>
      <button
        class="digit-button zero-button"
        @click="onDigitPress(0)"
        :disabled="code.length >= 6"
      >
        0
      </button>
      <button class="submit-button" @click="onSubmitPress" :disabled="code.length !== 6">
        Valider
      </button>
    </div>
  </div>
</template>

<style scoped>
.numeric-keypad {
  width: 300px;
  margin: 0 auto;
}

.display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.code-display {
  display: flex;
  gap: 10px;
}

.code-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  transition: all 0.2s ease;
}

.code-dot.filled {
  background-color: #333;
  border-color: #333;
  transform: scale(1.1);
}

.delete-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
}

.delete-button:active {
  transform: scale(0.9);
}

.delete-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.keypad-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.zero-button {
  grid-column: 2;
}

.digit-button,
.submit-button {
  padding: 15px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.digit-button:hover,
.submit-button:hover {
  background-color: #e0e0e0;
}

.digit-button:active,
.submit-button:active {
  transform: scale(0.95);
  background-color: #d5d5d5;
}

/* Animation de l'effet d'onde */
.digit-button::after,
.submit-button::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.2) 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition:
    transform 0.5s,
    opacity 0.5s;
}

.digit-button:active::after,
.submit-button:active::after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

.submit-button {
  grid-column: span 3;
  background-color: #4caf50;
  color: white;
  margin-top: 10px;
}

.submit-button:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
  transform: none;
}

.submit-button:disabled:active {
  transform: none;
}

.digit-button:disabled {
  background-color: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
  transform: none;
}

.digit-button:disabled:active {
  transform: none;
}
</style>
