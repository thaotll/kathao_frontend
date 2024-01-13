import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritenView from '../views/FavoritenView.vue'
import JobsView from "@/views/JobsView.vue";
import CreateJobView from "@/views/CreateJobView.vue";
import ContactFormView from "@/views/ContactFormView.vue";
;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Startseite',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'Meine Favoriten',
      component: FavoritenView
    },
    {
      path: '/create-job',
      name: 'create-job',
      component: CreateJobView
    },
    {
      path: '/jobs',
      name: 'Meine Jobs',
      component: JobsView
    },
    { path: '/jetzt-kontaktieren',
      name: 'jetzt-kontaktieren',
      component: ContactFormView
    },
  ]
});

export default router
