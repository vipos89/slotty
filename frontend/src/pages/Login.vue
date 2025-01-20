<template>
    <div class="auth-page">
      <h2>Авторизация</h2>
      <form @submit.prevent="login" class="auth-form">
        <input v-model="credentials.email" type="email" placeholder="Email" required />
        <input v-model="credentials.password" type="password" placeholder="Пароль" required />
        <button type="submit" class="auth-button">Войти</button>
      </form>
      <p v-if="message" class="auth-message">{{ message }}</p>
      <router-link to="/register" class="auth-link">Нет аккаунта? Зарегистрироваться</router-link>
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
        message: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await api.login(this.credentials);
          this.message = 'Авторизация успешна!';
          console.log(response.data);
          // Перенаправляем на главную страницу после успешного входа
          this.$router.push('/');
        } catch (error) {
          this.message = 'Ошибка при авторизации';
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-page {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .auth-form input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .auth-button {
    background-color: #3498db;
    color: #fff;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .auth-button:hover {
    background-color: #2980b9;
  }
  
  .auth-message {
    margin-top: 1rem;
    color: #3498db;
  }
  
  .auth-link {
    display: block;
    margin-top: 1rem;
    color: #3498db;
    text-decoration: none;
  }
  
  .auth-link:hover {
    text-decoration: underline;
  }
  </style>