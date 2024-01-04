<template>
  <div class="contact-form">
    <h2>Kontaktiere uns</h2>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const router = useRouter();

const handleSubmit = () => {
  // Perform form validation and submit logic
  if (validateForm()) {
    console.log('Formulardaten senden:', formData.value);
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
/* Styles for the contact page */
.contact-form {
  max-width: 400px;
  margin: 20px auto;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  margin-bottom: 10px;
  padding: 8px;
}

button {
  background-color: #0570B0;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #04508e;
}
</style>
