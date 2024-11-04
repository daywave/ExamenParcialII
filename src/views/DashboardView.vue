<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Bienvenido al sistema de gestión de créditos.</p>

    <div class="dashboard-sections">
      <div class="section">
        <h2>Registrar Nuevo Crédito</h2>
        <button @click="goToNewCredit">Nuevo Crédito</button>
      </div>

      <div class="section">
        <h2>Registrar Nuevo Cliente</h2>
        <button @click="goToRegisterClient">Nuevo Cliente</button>
      </div>

      <div class="section">
        <h2>Consultar Historial</h2>
        <button @click="goToHistory">Ver Historial</button>
      </div>
    </div>

    <button class="logout-button" @click="handleLogout">Cerrar Sesión</button>
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
        this.$router.push('/login');
        return;
      }

      const response = await axios.get('http://localhost:3000/api/dashboard', {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error al acceder al dashboard:', error.response ? error.response.data : error.message);
      this.$router.push('/login');
    }
  },
  methods: {
    goToNewCredit() {
      this.$router.push('/new-credit');
    },
    goToRegisterClient() {
      this.$router.push('/register-client');
    },
    goToHistory() {
      this.$router.push('/history');
    },
    handleLogout() {
      UserController.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
.dashboard {
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  font-size: 2rem;
  color: #007bff;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
}

/* Contenedor de secciones del dashboard */
.dashboard-sections {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Estilo para cada sección */
.section {
  background-color: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.section:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

/* Estilos para los botones */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}

/* Botón de cierre de sesión */
.logout-button {
  background-color: #dc3545;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  width: 200px;
}

.logout-button:hover {
  background-color: #c82333;
}
</style>
