<template>
  <header>
    <div id="app">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login" v-if="!authenticated">
          Login
        </RouterLink> |
        <RouterLink to="/profile" v-if="authenticated" >
          Profile
        </RouterLink> |
        <a v-if="authenticated" v-on:click="logout()">
          Logout
        </a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { watch, onMounted, ref } from 'vue'
import { useAuth } from '@okta/okta-vue'
const $auth = useAuth()
const $route = useRoute()
const authenticated = ref(false)
async function logout() {
  await $auth.signOut()
}
async function isAuthenticated () {
  authenticated.value = await $auth.isAuthenticated()
}
watch(() => $route.path, async () => {
  await isAuthenticated()
})
onMounted(async () => {
  await isAuthenticated()
  $auth.authStateManager.subscribe(isAuthenticated)
})
</script>

<style>
/* Fügen Sie hier ggf. globale Styles hinzu */
</style>