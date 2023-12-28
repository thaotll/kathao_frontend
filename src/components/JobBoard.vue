<template>
  <div class="job-board">
    <img :src="image" :alt="jobTitle" class="job-image" />
    <div class="job-details">
      <div class="header">
        <h2 class="job-title">{{ jobTitle }}</h2>
      </div>
      <p class="company-title">{{ companyTitle }}</p>
      <p class="location">{{ location }}</p>
      <p class="description">{{ description }}</p>
      <div class="date-details">
        <p><strong>Startdatum:</strong> {{ startDate }}</p>
        <p><strong>Bewerbungsfrist:</strong> {{ deadline }}</p>
      </div>
      <button class="apply-button" @click="applyNow">Jetzt bewerben</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobBoard',
  props: {
    image: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    companyTitle: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
  },
  methods: {
    applyNow() {
      alert('Bewerbung wurde eingereicht!');
    },
  },
});
</script>

<style scoped>
.job-board {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0 0 10px;
  width: 280px;
  height: 340px;
  justify-content: space-between;
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

.company-title,
.location
{
  color: black;
  font-size: 14px;
  margin-bottom: 0.5px;
}

.description,
.date-details
{
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
