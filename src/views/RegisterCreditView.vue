<template>
  <div class="register-credit">
    <h1>Registrar Nuevo Crédito</h1>
    <form @submit.prevent="handleRegisterCredit">
      <div class="form-group">
        <label for="correo">Correo Electrónico del Cliente</label>
        <input type="email" id="correo" v-model="clientEmail" required />
      </div>

      <div class="form-group">
        <label for="monto">Monto</label>
        <input type="number" id="monto" v-model="credit.monto" required />
      </div>

      <div class="form-group">
        <label for="meses">Plazo (meses)</label>
        <input type="number" id="meses" v-model="credit.meses" required />
      </div>

      <div class="form-group">
        <label for="interes">Interés (%)</label>
        <input type="number" id="interes" v-model="credit.interes" required step="0.01" />
      </div>

      <button type="submit">Registrar Crédito</button>
    </form>
  </div>
</template>

<script>
import LoanController from "@/controllers/LoanController";

export default {
  data() {
    return {
      credit: {
        monto: null,
        meses: null,
        interes: null,
      },
      clientEmail: "", // Nuevo campo para el correo electrónico del cliente
    };
  },
  methods: {
    async handleRegisterCredit() {
      try {
        const result = await LoanController.registerLoan(this.credit, this.clientEmail);

        if (result.success) {
          console.log("Préstamo registrado con éxito:", result.message);
          this.$router.push(`/client/${this.clientEmail}/credits`);
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("Error al registrar el crédito:", error);
        alert("Error al registrar el crédito. Por favor, inténtalo de nuevo.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos básicos del formulario */
.register-credit {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
}

.register-credit h1 {
  font-size: 1.8rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 1.5rem;
}

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

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

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
