<template>
  <div class="search-container">
    <div class="search-input">
      <input v-model="searchTerm" type="text" placeholder="Jobtitel, Stichworte, Unternehmen..." />
    </div>
    <div class="search-button">
      <button @click="emitSearch">Jobs finden</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

// Ref für den Suchbegriff
const searchTerm = ref('');

// Definiert Emits für das 'search'-Event
const emit = defineEmits(['search']);

// Funktion zum Auslösen des 'search'-Events mit dem aktuellen Suchbegriff
const emitSearch = () => {
  emit('search', searchTerm.value);
};
</script>

<style scoped>
.search-container {
  display: flex;
  margin-top: 16px;
  margin-bottom: 40px;
}

.search-input {
  width: 60%;
  max-width: 400px;
  margin-top: 16px;
}

.search-button {
  max-width: 300px;
  margin-top: 16px;
}

.search-input input {
  width: 100%;
  height: 100%;
  border: 1px solid #CCCCCC;
  outline: none;
  background: transparent;
  font-family: sans-serif;
  font-size: 10px;
  color: #999999;
}

.search-button button {
  width: 100%;
  height: 100%;
  border: 1px solid #CCCCCC;
  outline: none;
  background: #0570B0;
  color: #FFFFFF;
  font-family: sans-serif;
  font-size: 10px;
  cursor: pointer;
  padding: 8px;
}
</style>
