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
  
      <!-- Основной контент -->
      <main>
        <!-- Герой-секция -->
        <section class="hero">
          <div class="container">
            <h1 class="hero-title">Управляйте своим бизнесом легко</h1>
            <p class="hero-subtitle">Онлайн-запись, управление расписанием и аналитика в одном месте.</p>
            <router-link to="/register" class="hero-button">Начать бесплатно</router-link>
          </div>
        </section>
  
        <!-- Секция с услугами -->
        <section class="services">
          <div class="container">
            <h2 class="services-title">Наши возможности</h2>
            <div class="services-grid">
              <div class="service-card">
                <h3>Онлайн-запись</h3>
                <p>Клиенты могут записываться на услуги в любое время.</p>
              </div>
              <div class="service-card">
                <h3>Управление расписанием</h3>
                <p>Контролируйте расписание сотрудников и ресурсов.</p>
              </div>
              <div class="service-card">
                <h3>Аналитика</h3>
                <p>Получайте отчеты о доходах и посещаемости.</p>
              </div>
            </div>
          </div>
        </section>
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
    name: 'App',
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
  
  /* Герой-секция */
  .hero {
    background-color: #3498db;
    color: #fff;
    padding: 4rem 0;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .hero-button {
    background-color: #fff;
    color: #3498db;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .hero-button:hover {
    background-color: #f1f1f1;
  }
  
  /* Секция с услугами */
  .services {
    padding: 4rem 0;
    background-color: #f9f9f9;
  }
  
  .services-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .service-card p {
    color: #666;
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