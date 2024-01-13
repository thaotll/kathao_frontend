<template>
  <div class="edit-job">
    <h2>Bearbeiten</h2>
    <form @submit.prevent="saveJob">
      <label>
        Jobtitel:
        <input v-model="editedJob.jobTitle" type="text" />
      </label>
      <label>
        Unternehmen:
        <input v-model="editedJob.companyTitle" type="text" />
      </label>
      <label>
        Standort:
        <input v-model="editedJob.location" type="text" />
      </label>
      <label>
        Beschreibung:
        <textarea v-model="editedJob.description"></textarea>
      </label>
      <label>
        Bewerbungsfrist:
        <input v-model="editedJob.deadline" type="date" />
      </label>
      <label>
        Startdatum:
        <input v-model="editedJob.startDate" type="date" />
      </label>
      <button type="submit">Speichern</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

interface Job {
  id: number;
  jobTitle: string;
  companyTitle: string;
  location: string;
  description: string;
  deadline: string;
  startDate: string;
}

const props = defineProps({
  jobId: Number,
  job: {
    type: Object as () => Job,
    default: () => ({}) // Provide a default value
  },
});

const emit = defineEmits(['save']);

let editedJob = ref({ ...props.job, id: props.jobId }); // Declare editedJob

const saveJob = async () => {
  if (props.jobId) {
    try {
      const apiUrl = `http://localhost:8080/stellenangebote/${props.jobId}`;
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedJob.value),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }

      const editedJobResponse = await response.json();
      console.log('Stellenangebot erfolgreich aktualisiert', editedJobResponse);
      editedJob = ref(editedJobResponse); // Update editedJob
      emit('save', editedJobResponse);
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Stellenangebots:', error);
    }
  } else {
    console.error('Fehler: props.jobId ist undefined');
  }
};
</script>

<style scoped>
.edit-job {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
  width: 400px; /* Adjust the width as needed */
}

.edit-job h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.edit-job form {
  display: flex;
  flex-direction: column;
}

.edit-job label {
  font-weight: bold;
  margin-bottom: 10px;
}

.edit-job input[type="text"],
.edit-job textarea,
.edit-job input[type="date"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
}

.edit-job button[type="submit"] {
  background-color: #0570B0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
</style>