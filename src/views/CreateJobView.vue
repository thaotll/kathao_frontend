<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar />
    </div>

    <div class="main-content">
      <div class="headline">
        Jobanzeigen erstellen
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import {RouterLink} from "vue-router";
</script>

<style scoped>
.app {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 60px;
  padding: 8px;
  background: #0570B0;
  border: 1px solid #0570B0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  width: 93px;
  height: 36px;
  color: #FFFFFF;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 22px;
  text-align: left;
  margin-top: 5px;
  cursor: pointer;
}

.headline {
  height: 60px;
  color: #444444;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  padding: 0;
  line-height: 1.4;
  margin: 0;
}
</style>