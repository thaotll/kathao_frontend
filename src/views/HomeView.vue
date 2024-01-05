<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar />
    </div>

    <div class="main-content">
      <div class="text-container">
        <div class="headline-container">
          <div class="headline">
            Dein Karriereweg beginnt bei Kathao
          </div>

          <div class="subheadline">
            Finde jetzt deinen Traumjob
          </div>
        </div>

        <div class="content">
          <p>
            Entdecke Tausende von Jobmöglichkeiten <br />
            in verschiedenen Branchen und finde deinen perfekten <br />
            Match.
          </p>
        </div>

        <div class="search-container">
          <div class="search-input">
            <input type="text" placeholder="Jobtitel, Stichworte, Unternehmen..." />
          </div>

          <div class="search-button">
            <button>Jobs finden</button>
          </div>
        </div>

        <div class="line"></div>

        <div class="job-list-header">
          <h2>Stellenanzeige</h2>
        </div>

        <div class="job-board-container">
          <div v-for="job in jobList" :key="job.id">
            <JobBoard :image="job.companyLogo || defaultCompanyLogo" :jobId="job.id" />
          </div>
        </div>
        <div class="line"></div>

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
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue';
import JobBoard from '@/components/JobBoard.vue';
import CreateJobView from '@/views/CreateJobView.vue'; // Hier Import der CreateJobView-Komponente
import FooterComponent from '@/components/FooterComponent.vue';
import StellenangebotForm from "@/components/StellenangebotForm.vue";

type Job = {
  id: number;
  title: string;
  companyTitle: string;
  location: string;
  description: string;
  deadline: string;
  startDate: string;
  companyLogo: string;
};

const jobList = ref<Job[]>([]);
const defaultCompanyLogo = 'https://imageio.forbes.com/specials-images/imageserve/5f40212498cbfd326eb150c8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds';

async function loadJobList() {
  try {
    const response = await fetch('http://localhost:8080/stellenangebote');
    if (response.ok) {
      jobList.value = await response.json();
    } else {
      console.error('Fehler beim Laden der Stellenangebote:', response.statusText);
    }
  } catch (error) {
    console.error('Fehler beim Laden der Stellenangebote:', error);
  }
}

onMounted(loadJobList);

const handleJobPosted = (newJob: Job) => {
  jobList.value.push(newJob);
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
}

.headline-container{
  margin-top: 80px;
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


.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 10px;
}

.text-container {
  margin-bottom: 20px;
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
  margin: 0;
}

.subheadline {
  height: 60px;
  color: #444444;
  font-family: sans-serif;
  font-size: 20px;
  text-align: left;
  padding: 0;
  line-height: 1.4;
  margin: 0;
}

.content {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  background: #EBEBEB;
  color: #444444;
  border-radius: 16px;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-align: center;
}

.search-container {
  display: flex;
  margin-top: 16px;
  margin-bottom: 40px;
}

.search-input {
  width: 60%;
  max-width: 400px;
  margin-top: 16px;
  margin-bottom: 40px;
}

.search-button {
  max-width: 300px;
  margin-top: 16px;
  margin-bottom: 40px;
}

.search-input input {
  width: 100%;
  height: 100%;
  border: 1px solid #CCCCCC;
  outline: none;
  background: transparent;
  font-family: sans-serif;
  font-size: 10px;
  color: #999999;
  padding: 8px;
}

.search-button button {
  width: 100%;
  height: 100%;
  border: 1px solid #CCCCCC;
  outline: none;
  background: #0570B0;
  color: #FFFFFF;
  font-family: sans-serif;
  font-size: 10px;
  cursor: pointer;
  border-radius: 0px 3px 3px 0px;
  padding: 8px;
}

.search-image {
  width: 400px;
  height: auto;
  margin-left: 800px;
  margin-top: -300px;
  display: block;
}

.line {
  width: 100vw;
  height: 1px;
  background: #D6D6D6;
  margin-left: -120px;
  margin-bottom: 70px;
  border: none;
  clear: both;
}

.job-list-header h2 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  margin-left: 500px;
  margin-bottom: 20px;
}

.job-board-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 70px;
}

.job-board-item {
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
  box-sizing: border-box;
}

.contact-section {
  margin-top: 40px;
}

.contact-header h2 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  margin-left: 470px;
}

.contact-description p {
  font-size: 14px;
  color: black;
  margin: 10px 0;
  margin-left: 200px;
}

.contact-button {
  margin-top: 30px;
  margin-left: 500px;
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