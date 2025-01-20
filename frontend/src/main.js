import { createApp } from 'vue'; // Импортируем функцию createApp из Vue 3
import App from './App.vue'; // Импортируем корневой компонент App
import router from './router'; // Импортируем роутер

// Создаем экземпляр приложения
const app = createApp(App);

// Подключаем роутер
app.use(router);

// Монтируем приложение в элемент с id="app" в index.html
app.mount('#app');