<template>
  <div class="job-board">
    <img :src="image" :alt="jobTitle" class="job-image"/>
    <div class="heart-icon">
      <i class="fas fa-heart" @click="handleClick"></i>
    </div>
    <div class="job-details">
      <div class="header">
        <h2 class="job-title">{{ jobTitle }}</h2>
      </div>
      <p class="company-title">{{ company }}</p>
      <p class="location">{{ location }}</p>
      <p class="description">{{ description }}</p>
      <div class="date-details">
        <p><strong>Startdatum:</strong> {{ startDate }}</p>
        <p><strong>Bewerbungsfrist:</strong> {{ deadline }}</p>
      </div>
      <button class="apply-button" @click="applyNow">Jetzt bewerben</button>
      <button type="button" @click="editJob">Bearbeiten</button>
      <ModalComponent :show="isEditing" @update:show="isEditing = $event">
        <EditComponent :jobId="jobId" @save="saveJob"/>
      </ModalComponent>
      <button type="button" @click="deleteJob">Löschen</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';
import EditComponent from './EditComponent.vue';
import ModalComponent from './ModalComponent.vue';

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

const props = defineProps({
  image: String,
  jobId: Number,
  job: {
    type: Object as () => Job,
    default: () => ({})
  }
});

const emit = defineEmits(['addToFavorites', 'jobDeleted', 'save']);
const isEditing = ref(false);
const job = ref<Job | undefined>(undefined);
const favoriteJobs = ref<Job[]>([]);
const jobList = ref<Job[]>([]);

const editJob = () => {
  isEditing.value = true; // Set the editing status to true when the "Edit" button is clicked
};

const jobTitle = ref('');
const company = ref('');
const location = ref('');
const description = ref('');
const deadline = ref('');
const startDate = ref('');

const addToFavorites = (jobId: number) => {
  console.log('addToFavorites wurde aufgerufen');
  console.log('jobList:', jobList.value);
  const jobToAdd = jobList.value.find((job) => job.id === jobId);
  console.log('Gefundener Job:', jobToAdd);

  if (jobToAdd) {
    console.log('Job wurde gefunden');
    jobToAdd.favorite = !jobToAdd.favorite; // Toggle the favorite property
    if (jobToAdd.favorite) {
      console.log('Job wurde favorisiert');
      favoriteJobs.value.push(jobToAdd); // Add to favorites if favorited
    } else {
      console.log('Job wurde entfavorisiert');
      const index = favoriteJobs.value.findIndex((job) => job.id === jobId);
      if (index !== -1) {
        favoriteJobs.value.splice(index, 1); // Remove from favorites if unfavorited
      }
    }
  }
};


const handleClick = () => {
  console.log('Heart icon clicked');
  if (props.jobId !== undefined) {
    addToFavorites(props.jobId);
  }
};

const applyNow = () => {
  alert('Bewerbung wurde eingereicht!');
};

const saveJob = async (editedJob: Job) => {
  if (isEditing.value && props.jobId) {
    try {
      const apiUrl = `http://localhost:8080/stellenangebote/${props.jobId}`;
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedJob),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok:');
      }

      console.log('Stellenangebot erfolgreich aktualisiert');
      job.value = editedJob;
      isEditing.value = false;
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Stellenangebots:', error);
    }
  } else {
    console.error('Fehler: props.jobId ist undefined oder isEditing ist false');
  }
};

const deleteJob = async () => {
  try {
    const apiUrl = `http://localhost:8080/stellenangebote/${props.jobId}`;
    const response = await fetch(apiUrl, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log('Stellenangebot erfolgreich gelöscht');
    emit('jobDeleted');
  } catch (error) {
    console.error('Fehler beim Löschen des Stellenangebots:', error);
  }
};

const fetchJobDetails = () => {
  const apiUrl = 'http://localhost:8080/stellenangebote/' + props.jobId;
  console.log('API-URL:', apiUrl);

  fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehlerhafte API-Antwort');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Empfangene Daten:', data);
        jobTitle.value = data.jobTitle;
        company.value = data.company;
        location.value = data.location;
        description.value = data.description;
        deadline.value = data.deadline;
        startDate.value = data.startDate;
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen der Job-Daten:', error);
      });
};

fetchJobDetails();
</script>

<style scoped>
.job-board {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 380px;
  justify-content: center;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 30px;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
}

.heart-icon i {
  color: white;
  font-size: 24px;
  z-index: 2;
}

.job-image {
  width: 100%;
  height: 130px;
  border-bottom: 2px solid #ccc;
}

.job-details {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-title {
  font-size: 17px;
  margin: 0;
  font-weight: bold;
  color: black;
}

.location, .company-title {
  color: black;
  font-size: 14px;
  margin-bottom: 0.5px;
}

.description,
.date-details {
  color: black;
  margin-bottom: 0.5px;
  font-size: 10px;
}

.apply-button {
  background-color: #0570B0;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: -15px;
}
</style>
