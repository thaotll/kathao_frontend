<template>
  <div class="app">
    <div class="header">
      <p class="brand">Kathao</p>
      <NavBar />
    </div>

    <div class="main-content">
      <div class="headline">
        Meine Favoriten
      </div>

    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import JobBoard from '@/components/JobBoard.vue';
import { ref } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useRouter } from 'vue-router';

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

const jobList = ref<Job[]>([
  {
    id: 1,
    image: 'https://www.cursor.de/templates/yootheme/cache/a6/karriere_softwareentwickler_intro_AdobeStock_207766322_900x600-a657c930.webp',
    jobTitle: 'Softwareentwickler (m/w/d)',
    companyTitle: 'Tech Solutions GmbH',
    location: 'Berlin, Deutschland',
    description: 'Beschreibung: Wir suchen einen erfahrenen \n' +
        'Softwareentwickler, der unser agiles Team bei der \n' +
        'Entwicklung von innovativen Lösungen unterstützt. \n',
    deadline: '15. März 2023',
    startDate: 'sofort',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSg5yPwDfPx6bz25o1R-Lnwm0P-xfEoDYBOlpavcg18pvJYYEoz',
    jobTitle: 'Marketing Manager (m/w/d)',
    companyTitle: 'MarketBoost AG',
    location: 'München, Deutchland',
    description: 'Beschreibung: Wir suchen einen Marketing Manager mit \n' +
        'nachgewiesener Erfahrung im Aufbau von Marken und der \n' +
        'Entwicklung erfolgreicher Marketingstrategien. \n' +
        'Kommunikationsgeschick und Kreativität sind gefragt!',
    deadline: '20. April 2023',
    startDate: '1. Juni 2023',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRAv3hP_rWQlXIJGam07wScAtCsn513s2Jwi6ZZ6qtuQ0sQVi',
    jobTitle: 'Finanzanalyst (m/w/d)',
    companyTitle: 'FinanceInsights GmbH',
    location: 'Frankfurt, Deutchland',
    description: 'Beschreibung: Als Finanzanalyst wirst du in unserem\n' +
        'Team für die Analyse von Finanzdaten, die Erstellung \n' +
        'von Berichten und die Entwicklung von Prognosen \n' +
        'verantwortlich sein.',
    deadline: '10. April 2023',
    startDate: '15. Mai 2023',
  }
]);
</script>

<style scoped>
/* Füge die Styles für "Meine Favoriten" hinzu */
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
  margin: 0;
}

</style>
