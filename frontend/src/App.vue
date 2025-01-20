<template>
  <div id="app">
    <!-- Шапка -->
    <header class="header">
      <div class="container">
        <nav class="nav">
          <router-link to="/" class="logo">MySaaS</router-link>
          <div class="nav-links">
            <router-link to="/register" class="nav-link">Регистрация</router-link>
            <router-link to="/login" class="nav-link">Войти</router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- Основное содержимое -->
    <main>
      <router-view /> <!-- Здесь отображаются компоненты в зависимости от маршрута -->
    </main>

    <!-- Футер -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2023 MySaaS. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App', // Имя компонента
};
</script>

<style>
/* Общие стили */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Шапка */
.header {
  background-color: #2c3e50;
  padding: 1rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Основное содержимое */
main {
  padding: 2rem 0;
}

/* Футер */
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

.footer p {
  margin: 0;
}
</style>