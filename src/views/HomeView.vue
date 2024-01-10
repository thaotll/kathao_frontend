<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar/>
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
            Entdecke Tausende von Jobmöglichkeiten <br/>
            in verschiedenen Branchen und finde deinen perfekten <br/>
            Match.
          </p>
        </div>

        <SearchBar @search="handleSearch"/>
        </div>
        <div class="line"></div>

        <div class="job-list-header">
          <h2>Stellenanzeige</h2>
        </div>
        <div class="job-board-item">
          <div class="job-board-container">
            <div v-for="job in filteredJobList" :key="job.id">
              <JobBoard :image="job.companyLogo || defaultCompanyLogo" :jobId="job.id" @favorite="addToFavorites"/>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <ContactSection/>
      </div>
    </div>
  <FooterComponent/>
</template>


<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import NavBar from '@/components/NavBar.vue';
import JobBoard from '@/components/JobBoard.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ContactSection from '@/components/ContactSection.vue';
import SearchBar from '@/components/SearchBar.vue';

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
  favorite: boolean;
}

const emit = defineEmits(['favorite']);

const jobList = ref<Job[]>([]);
const filteredJobList = ref<Job[]>([]);

const defaultCompanyLogo = 'https://imageio.forbes.com/specials-images/imageserve/5f40212498cbfd326eb150c8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds';

const loadJobList = async () => {
  try {
    const response = await fetch('http://localhost:8080/stellenangebote');
    if (response.ok) {
      jobList.value = await response.json();
      filteredJobList.value = jobList.value; // Initial set to all jobs
    } else {
      console.error('Fehler beim Laden der Stellenangebote:', response.statusText);
    }
  } catch (error) {
    console.error('Fehler beim Laden der Stellenangebote:', error);
  }
};

onMounted(loadJobList);

const handleSearch = (searchTerm: string) => {
  if (!searchTerm.trim()) {
    // Wenn kein Suchbegriff eingegeben wurde, setzen Sie die gefilterte Liste zurück auf die vollständige Liste
    filteredJobList.value = jobList.value;
  } else {
    // Filtern basierend auf den gegebenen Kriterien
    filteredJobList.value = jobList.value.filter((job) =>
        job.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};

const addToFavorites = (jobId: number) => {
  emit('favorite', jobId);
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

.headline-container {
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
  margin-left: 80px;
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

.line {
  width: 100vw;
  height: 1px;
  background: #D6D6D6;
  margin-left: -80px;
  margin-bottom: 70px;
  border: none;
  clear: both;
}

.job-list-header h2 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  margin-left: 520px;
  margin-bottom: 60px;
}

.job-board-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.job-board-item {
  width: 100px;
  box-sizing: border-box;
}
</style>