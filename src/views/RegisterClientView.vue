<template>
    <div class="register-client">
      <h1>Registrar Cliente</h1>
      <form @submit.prevent="handleRegisterClient">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            v-model="client.nombre"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="direccion">Dirección</label>
          <textarea
            id="direccion"
            v-model="client.direccion"
            rows="3"
          ></textarea>
        </div>
  
        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            v-model="client.telefono"
          />
        </div>
  
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            v-model="client.correoElectronico"
            required
          />
        </div>
  
        <button type="submit">Registrar Cliente</button>
      </form>
    </div>
  </template>
  
  <script>
  import Client from "@/models/Client";
  import ClientController from "@/controllers/ClientController";
  
  export default {
    data() {
      return {
        client: new Client(), // Instancia del modelo Client
      };
    },
    methods: {
      async handleRegisterClient() {
        const response = await ClientController.registerClient(this.client);
  
        alert(response.message);
        if (response.success) {
          this.$router.push('/dashboard');
        }
      },
    },
  };
  </script>
  

  <style scoped>
/* Estilos generales del contenedor */
.register-client {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
}

.register-client h1 {
  font-size: 1.8rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Estilos para cada grupo de formulario */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

/* Estilos para los campos de entrada */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

/* Estilos para el botón */
button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 1rem;
}

button[type="submit"]:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button[type="submit"]:active {
  transform: translateY(1px);
}
</style>