import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritenView from '../views/FavoritenView.vue'
import JobsView from "@/views/JobsView.vue";
import CreateJobView from "@/views/CreateJobView.vue";
import ContactFormView from "@/views/ContactFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meine-favoriten',
      name: 'favoriten',
      component: FavoritenView
    },
    {
      path: '/create-job',
      name: 'create-job',
      component: CreateJobView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView // Stellen Sie sicher, dass dies korrekt ist
    },
    { path: '/jetzt-kontaktieren',
      name: 'jetzt-kontaktieren',
      component: ContactFormView
    }
  ]
});
export default router
