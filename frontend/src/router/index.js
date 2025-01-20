import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Main.vue'; // Главная страница
import Register from '@/pages/Register.vue'; // Страница регистрации
import Login from '@/pages/Login.vue'; // Страница авторизации

const routes = [
  { path: '/', component: Home }, // Главная страница
  { path: '/register', component: Register }, // Страница регистрации
  { path: '/login', component: Login }, // Страница авторизации
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;