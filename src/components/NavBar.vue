<template>
  <nav>
    <div class="menu">
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Startseite</RouterLink>
        </li>
        <li :class="{ 'active': $route.name === 'favoriten' }">
          <RouterLink :to="{ name: 'favoriten' }">Meine Favoriten</RouterLink>
        </li>
        <li :class="{ 'active': $route.name === 'jobs' }">
          <RouterLink :to="{ name: 'jobs' }">Meine Jobs</RouterLink>
        </li>
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
  font-weight: 600;
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

.menu .active {
  font-weight: bold;
}
</style>