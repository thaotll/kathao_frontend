<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">© 2024 Kathao, GmbH.</div>
      <div class="footer-text">
        Terms | Privacy | Security | Contact | Manage cookies
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: white;
  color: black;
  text-align: center;
  padding: 20px;
  position: relative; /* Sticky-Position verwenden */
  bottom: 0; /* Am unteren Bildschirmrand positionieren */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  margin-left: 20px;
  font-family: sans-serif;
}

.footer-text {
  margin-right: 20px;
  font-family: sans-serif;
}

</style>
