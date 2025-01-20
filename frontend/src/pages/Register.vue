<template>
    <div class="auth-page">
      <h2>Регистрация</h2>
      <form @submit.prevent="register" class="auth-form">
        <input v-model="user.username" type="text" placeholder="Имя пользователя" required />
        <input v-model="user.email" type="email" placeholder="Email" required />
        <input v-model="user.password" type="password" placeholder="Пароль" required />
        <button type="submit" class="auth-button">Зарегистрироваться</button>
      </form>
      <p v-if="message" class="auth-message">{{ message }}</p>
      <router-link to="/login" class="auth-link">Уже есть аккаунт? Войти</router-link>
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
        },
        message: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await api.register(this.user);
          this.message = 'Регистрация успешна!';
          console.log(response.data);
          // Перенаправляем на страницу входа после успешной регистрации
          this.$router.push('/login');
        } catch (error) {
          this.message = 'Ошибка при регистрации';
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