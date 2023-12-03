<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <input v-model="jobTitleField" placeholder="Job Title" type="text" id="jobTitle" autocomplete="organization-title">
      <input v-model="companyField" placeholder="Company" type="text" id="company" autocomplete="organization">
      <input v-model="locationField" placeholder="Location" type="text" id="location" autocomplete="location">
      <input v-model="descriptionField" placeholder="Description" type="text" id="description" autocomplete="off">
      <input v-model="deadlineField" placeholder="Deadline" type="date" id="deadline" autocomplete="off">
      <input v-model="startDateField" placeholder="Start Date" type="date" id="startDate" autocomplete="off">
      <button type="button" @click="save()">Save</button>
    </div>
    <div>
      <table>
        <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Location</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Start Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="items.length === 0">
          <td colspan="6">No job postings yet</td>
        </tr>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.jobTitle }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.deadline }}</td>
          <td>{{ item.startDate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

defineProps<{
  title: string
}>()

type Stellenangebot = {
  id?: number
  jobTitle: string
  company: string
  location: string
  description: string
  deadline: string
  startDate: string
}

const items: Ref<Stellenangebot[]> = ref([])
const jobTitleField = ref('')
const companyField = ref('')
const locationField = ref('')
const descriptionField = ref('')
const deadlineField = ref('')
const startDateField = ref('')

function loadStellenangebote() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = baseUrl + '/stellenangebote'

  fetch(endpoint)
      .then(response => response.json())
      .then(result => {
        items.value = result
      })
      .catch(error => console.error('Error loading job postings:', error))
}

function save() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL // 'http://localhost:8080' in dev mode
  const endpoint = baseUrl + '/stellenangebote'

  const data: Stellenangebot = {
    jobTitle: jobTitleField.value,
    company: companyField.value,
    location: locationField.value,
    description: descriptionField.value,
    deadline: deadlineField.value,
    startDate: startDateField.value,
  }

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(savedStellenangebot => {
        items.value.push(savedStellenangebot)
        console.log('Job posting saved successfully:', savedStellenangebot)
      })
      .catch(error => console.error('Error saving job posting:', error))
}

// Lifecycle hooks
onMounted(() => {
  loadStellenangebote()
})
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