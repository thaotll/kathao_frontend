<template>
  <nav>
    <div class="menu">
      <ul>
        <li><router-link to="/">Startseite</router-link></li>
        <li><router-link to="/jobs">Meine Jobs</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.menu {
  color: #FFFFFF;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 15px;
  display: flex;
  align-items: center;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu li {
  margin-left: 16px;
}

.menu a {
  color: #FFFFFF;
  text-decoration: none;
}

.menu a::after {
  content: '|';
  margin-left: 8px;
}
</style>