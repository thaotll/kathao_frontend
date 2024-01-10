<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar/>
    </div>
    <div class="contact-form">
      <h2>Kontaktiere uns</h2>
      <div v-if="showMessage" class="success-message">
        Nachricht erfolgreich gesendet!
      </div>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>

        <label for="email">E-Mail:</label>
        <input type="email" id="email" v-model="formData.email" required>

        <label for="message">Nachricht:</label>
        <textarea id="message" v-model="formData.message" required></textarea>

        <button type="submit">Senden</button>
      </form>
    </div>
  </div>
  <FooterComponent/>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const showMessage = ref(false);

const handleSubmit = () => {
  // Perform form validation and submit logic
  if (validateForm()) {
    console.log('Formulardaten senden:', formData.value);
    showMessage.value = true;
  }
};

const validateForm = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Bitte füllen Sie alle Felder aus.');
    return false;
  }

  return true;
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

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
  z-index: 100;
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

.contact-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input[type="text"],
input[type="email"] {
  height: 40px;
}

textarea {
  min-height: 100px;
  margin-bottom: 50px;
}

button {
  background-color: #0570B0;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;
  margin-bottom: 170px;
}

button:hover {
  background-color: #04508e;
}

.success-message {
  margin-top: 10px;
  color: green; /* Ändern Sie die Farbe nach Ihren Wünschen */
  font-weight: bold;
}
</style>