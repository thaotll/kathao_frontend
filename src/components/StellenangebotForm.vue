<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input v-model="jobTitle" id="jobTitle" placeholder="Job Title" type="text">
      <input v-model="companyTitle" id="companyTitle" placeholder="Company Title" type="text">
      <input v-model="location" id="location" placeholder="Location" type="text">
      <input v-model="description" id="description" placeholder="Description" type="text">
      <input v-model="deadline" id="deadline" placeholder="Deadline" type="date">
      <input v-model="startDate" id="startDate" placeholder="Start Date" type="date">
      <button type="button" @click="saveJob">Save</button>
    </div>
    <div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const props = defineProps({
  title: String
});

// Definiert Emits für das 'jobPosted'-Event
const emit = defineEmits(['jobPosted']);

// Refs für die Eingabefelder
const jobTitle = ref('');
const companyTitle = ref('');
const location = ref('');
const description = ref('');
const deadline = ref('');
const startDate = ref('');

// Funktion zum Speichern des Jobs und Auslösen des 'jobPosted'-Events
function saveJob() {
  // Erstellt ein neues Jobobjekt aus den Eingabewerten
  const newJob = {
    jobTitle: jobTitle.value,
    companyTitle: companyTitle.value,
    location: location.value,
    description: description.value,
    deadline: deadline.value,
    startDate: startDate.value,
  };

  // Sendet das 'jobPosted'-Event mit dem neuen Jobobjekt
  emit('jobPosted', newJob);

  // Setzt die Eingabefelder auf leere Werte zurück
  jobTitle.value = '';
  companyTitle.value = '';
  location.value = '';
  description.value = '';
  deadline.value = '';
  startDate.value = '';
}

</script>


<style scoped>
h3 {
  text-align: center;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  color: #fff;
  background-color: #007BFF;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #007BFF;
  color: #fff;
}

div {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}
</style>