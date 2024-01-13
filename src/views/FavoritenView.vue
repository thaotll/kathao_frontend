<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar/>
    </div>

    <div class="main-content">
      <div class="headline">
        Meine Favoriten
      </div>
      <div class="job-board-container">
        <div v-if="favoriteJobs.length === 0">
          <p>Keine favorisierten Jobs vorhanden.</p>
        </div>
        <div v-else class="job-board-container">
          <div v-for="job in favoriteJobs" :key="job.id">
            <JobBoard :image="job.companyLogo || defaultCompanyLogo" :jobId="job.id" @favorite="addToFavorites"/>
            <div class="job-details">
              <p class="job-title">{{ job.jobTitle }}</p>
              <p class="company-title">{{ job.company }}</p>
              <p class="location"><strong>Standort:</strong> {{ job.location }}</p>
              <p class="description"><strong>Beschreibung:</strong> {{ job.description }}</p>
              <p class="startDate"><strong>Startdatum:</strong> {{ job.startDate }}</p>
              <p class="deadline"><strong>Bewerbungsfrist:</strong> {{ job.deadline }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
// Importiere benötigte Komponenten und Funktionen
import NavBar from '@/components/NavBar.vue';
import JobBoard from '@/components/JobBoard.vue';
import {onMounted, ref} from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

// Definiere das Job-Interface
interface Job {
  id: number;
  image: string;
  jobTitle: string;
  company: string;
  location: string;
  description: string;
  deadline: string;
  startDate: string;
  companyLogo: string;
  favorite: boolean
}

// Refs für die Liste aller Jobs, favorisierten Jobs und das Standardfirmenlogo
const jobList = ref<Job[]>([]);
const favoriteJobs = ref<Job[]>([]);
const defaultCompanyLogo = 'https://imageio.forbes.com/specials-images/imageserve/5f40212498cbfd326eb150c8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds';

// Funktion zum Laden der Liste aller Jobs
async function loadJobList() {
  console.log('loadJobList called');
  try {
    const response = await fetch('http://localhost:8080/stellenangebote');
    if (response.ok) {
      // Setze die Job-Liste und markiere jeden Job als nicht favorisiert
      jobList.value = (await response.json()).map((job: Job) => ({
        ...job,
        favorite: false,
      }));
      console.log('jobList after fetching data:', jobList.value);
    } else {
      console.error('Fehler beim Laden der Stellenangebote:', response.statusText);
    }
  } catch (error) {
    console.error('Fehler beim Laden der Stellenangebote:', error);
  }
}

// Bei der Montage der Komponente, lade die Liste aller Jobs
onMounted(loadJobList);

// Funktion zum Hinzufügen/Entfernen von Jobs zu/from den Favoriten
const addToFavorites = (jobId: number) => {
  console.log('addToFavorites wurde aufgerufen');
  console.log('jobList:', jobList.value);
  const jobToAdd = jobList.value.find((job) => job.id === jobId);
  console.log('Gefundener Job:', jobToAdd);

  if (jobToAdd) {
    console.log('Job wurde gefunden');
    jobToAdd.favorite = !jobToAdd.favorite;
    if (jobToAdd.favorite) {
      console.log('Job wurde favorisiert');
      favoriteJobs.value.push(jobToAdd);
    } else {
      console.log('Job wurde entfavorisiert');
      const index = favoriteJobs.value.findIndex((job) => job.id === jobId);
      if (index !== -1) {
        favoriteJobs.value.splice(index, 1);
      }
    }
  }
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

.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 10px;
  min-height: 100vh;
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
  height: 50px;
  color: #444444;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  padding: 0;
  line-height: 1.4;
  margin-top: 70px;
  margin-left: 40px;
}

.job-board-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 40px;
}

</style>
