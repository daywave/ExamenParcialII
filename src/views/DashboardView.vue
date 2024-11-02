<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <p>Bienvenido al sistema de gestión de créditos.</p>
  
      <div class="dashboard-sections">
        <div class="section">
          <h2>Consultar Clientes</h2>
          <button @click="goToClients">Ver Clientes</button>
        </div>
  
        <div class="section">
          <h2>Registrar Nuevo Crédito</h2>
          <button @click="goToNewCredit">Nuevo Crédito</button>
        </div>
      </div>
  
      <button @click="handleLogout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  import UserController from "@/controllers/UserController";
  import axios from "axios";
  
  export default {
    async mounted() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Si no hay token, redirige al login
          this.$router.push('/login');
          return;
        }
  
        // Verifica el token haciendo una solicitud al backend
        const response = await axios.get('http://localhost:3000/api/dashboard', {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data.message); // Mensaje de bienvenida al dashboard
      } catch (error) {
        console.error('Error al acceder al dashboard:', error.response ? error.response.data : error.message);
        // Si ocurre un error (como token inválido), redirige al login
        this.$router.push('/login');
      }
    },
    methods: {
      goToClients() {
        this.$router.push('/clients');
      },
      goToNewCredit() {
        this.$router.push('/new-credit');
      },
      handleLogout() {
        UserController.logout();
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  
  <style scoped>
  .dashboard {
    padding: 2rem;
    text-align: center;
  }
  
  .dashboard-sections {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  
  .section {
    background-color: #f4f7fa;
    padding: 1.5rem;
    border-radius: 8px;
    width: 45%;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
  }
  </style>
  