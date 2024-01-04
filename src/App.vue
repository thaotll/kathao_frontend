<template>
  <div id="app">
     <!-- Fügen Sie die Navbar hier ein -->
    <router-view /> <!-- Dies stellt sicher, dass die aktuellen Ansichten gerendert werden -->
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style>
/* Fügen Sie hier ggf. globale Styles hinzu */
</style>