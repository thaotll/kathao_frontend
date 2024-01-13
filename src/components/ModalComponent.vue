<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <slot></slot>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Props und Emits definieren
const props = defineProps({
  show: Boolean, // Boolean-Prop 'show', die den Modal-Zustand steuert
});

const emit = defineEmits(['update:show']); // Event 'update:show' für die Aktualisierung des 'show'-Props

// Funktion zum Schließen des Modals
const closeModal = () => {
  emit('update:show', false); // Emit des 'update:show'-Events mit dem Wert 'false' zum Schließen des Modals
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close-button {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>