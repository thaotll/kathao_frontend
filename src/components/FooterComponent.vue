<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">© 2023 Kathao, GmbH.</div>
      <nav class="footer-nav">
        <router-link to="/terms">Terms</router-link>
        <router-link to="/privacy">Privacy</router-link>
        <router-link to="/security">Security</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/manage-cookies">Manage cookies</router-link>
      </nav>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: white;
  color: black;
  text-align: center;
  padding: 20px;
  position: relative;
}


.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.footer-nav {
  display: flex;
  gap: 20px;
}

.footer-nav a {
  color: black;
  text-decoration: none;
}

.manage-cookies {
  font-size: 14px;
}

</style>
<script setup lang="ts">
</script>