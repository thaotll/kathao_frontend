<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar/>
    </div>

    <div class="main-content">
      <div class="headline">
        Meine Jobs
      </div>

      <router-link to="/create-job" class="create-job-button">
        Jobanzeigen erstellen +
      </router-link>

      <div class="job-board-container">
        <div v-for="job in newJobs" :key="job.id" class="job-board-item">
          <JobBoard
              :image="job.image"
              :jobTitle="job.jobTitle"
              :companyTitle="job.companyTitle"
              :location="job.location"
              :description="job.description"
              :deadline="job.deadline"
              :startDate="job.startDate"
              :jobId="job.id"
          />
        </div>
      </div>
      <FooterComponent/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import JobBoard from '@/components/JobBoard.vue';
import {ref} from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

interface Job {
  id: number;
  image: string;
  jobTitle: string;
  companyTitle: string;
  location: string;
  description: string;
  deadline: string;
  startDate: string;
}

const newJobs = ref<Job[]>([]);

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
  min-height: 100vh;
  display: flex;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  justify-content: space-between;
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
  margin-top: 50px;
  margin-left: 45px;
}

.job-board-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;
}

.job-board-item {
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
  box-sizing: border-box;
}

.create-job-button {
  width: 200px;
  height: 40px;
  border: 1px solid #CCCCCC;
  outline: none;
  background: #0570B0;
  color: #FFFFFF;
  font-family: sans-serif;
  font-size: 13px;
  cursor: pointer;
  border-radius: 0px 3px 3px 0px;
  padding: 8px;
  text-align: center;
  margin-top: -140px;
  margin-left: 40px;
}

</style>
