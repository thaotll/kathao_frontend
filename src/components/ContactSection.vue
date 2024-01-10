<template>
  <div class="contact-section">
    <div class="contact-header">
      <h2>Kontaktiere uns</h2>
    </div>
    <div class="contact-description">
      <p>
        Haben Sie Fragen, Anregungen oder möchten Sie mit uns in Kontakt treten? Nutzen Sie das Formular unten, um uns zu erreichen.
      </p>
    </div>
    <a class="contact-button" href="/jetzt-kontaktieren">
      <button class="apply-button">Jetzt kontaktieren</button>
    </a>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.contact-section {
  margin-top: 40px;
}

.contact-header h2 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  margin-left: 510px;
}

.contact-description p {
  font-size: 14px;
  color: black;
  margin: 10px 0;
  margin-left: 240px;
}

.contact-button {
  margin-top: 30px;
  margin-left: 540px;
}

.apply-button {
  background-color: #0570B0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  align-self: flex-end;
  font-weight: bolder;
  margin-bottom: 60px;
}
</style>
