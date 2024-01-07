<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar />
    </div>

    <div class="main-content">
      <div class="create-job-view">
        <div class="headline-container">
          <div class="headline">
            Stellenangebot erstellen
          </div>
        </div>

        <form @submit.prevent="createJob">
          <div class="form-group">
            <label for="jobTitle">Jobtitel</label>
            <input v-model="jobTitle" id="jobTitle" type="text" required>
          </div>
          <div class="form-group">
            <label for="company">Unternehmen</label>
            <input v-model="company" id="company" type="text" required>
          </div>
          <div class="form-group">
            <label for="location">Standort</label>
            <input v-model="location" id="location" type="text" required>
          </div>
          <div class="form-group">
            <label for="description">Beschreibung</label>
            <textarea v-model="description" id="description" rows="4" required></textarea>
          </div>
          <div class="form-group">
            <label for="deadline">Bewerbungsfrist</label>
            <input v-model="deadline" id="deadline" type="date" required>
          </div>
          <div class="form-group">
            <label for="startDate">Startdatum</label>
            <input v-model="startDate" id="startDate" type="date" required>
          </div>

          <button type="submit">Stellenangebot erstellen</button>
        </form>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>


<script lang="ts">
import {defineProps, defineEmits, ref} from 'vue';
import NavBar from '@/components/NavBar.vue';
import FooterComponent from "@/components/FooterComponent.vue";
import { useRouter } from 'vue-router';
export default {
  name: 'CreateJobView',
  components: {FooterComponent},
  setup() {
    const props = defineProps({
    });

    const emits = defineEmits();

    const jobTitle = ref('');
    const company = ref('');
    const location = ref('');
    const description = ref('');
    const deadline = ref('');
    const startDate = ref('');

    async function createJob() {
      try {
        const newJob = {
          jobTitle: jobTitle.value,
          company: company.value,
          location: location.value,
          description: description.value,
          deadline: deadline.value,
          startDate: startDate.value,
        };

        emits('jobPosted', newJob);

        jobTitle.value = '';
        company.value = '';
        location.value = '';
        description.value = '';
        deadline.value = '';
        startDate.value = '';
      } catch (error) {
        console.error('Fehler beim Erstellen des Stellenangebots:', error);
      }
    }

    return {
      jobTitle,
      company,
      location,
      description,
      deadline,
      startDate,
      createJob,
    };
  },
};
</script>

<style scoped>
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
.headline {
  height: 60px;
  color: #444444;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  padding: 0;
  line-height: 1.4;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-top: 60px;
}

.create-job-view {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}
.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 10px;
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
textarea,
input[type="date"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #0570B0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #045a8d;
}
</style>