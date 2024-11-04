<template>
    <div class="history-view">
      <h1>Historial de Préstamos</h1>
      
      <form @submit.prevent="fetchLoanHistory" class="search-form">
        <div class="form-group">
          <label for="email">Correo Electrónico del Cliente</label>
          <input 
            type="email" 
            id="email" 
            v-model.trim="clientEmail" 
            required 
            :disabled="isLoading"
          />
          <button type="submit" :disabled="isLoading">
            {{ isLoading ? 'Buscando...' : 'Buscar' }}
          </button>
        </div>
      </form>
  
      <!-- Mensaje de carga -->
      <div v-if="isLoading" class="loading-message">
        Cargando historial de préstamos...
      </div>
  
      <!-- Mensaje de error -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
  
      <!-- Resultados -->
      <div v-if="!isLoading && !error">
        <div v-if="loans.length > 0">
          <div v-for="loan in loans" :key="loan.id_prestamo" class="loan-section">
            <h2>Préstamo ID: {{ loan.id_prestamo }}</h2>
            <div class="loan-details">
              <p>Monto: ${{ formatNumber(loan.monto) }}</p>
              <p>Plazo: {{ loan.meses }} meses</p>
              <p>Estado: {{ loan.estado }}</p>
              <p>Interés: {{ loan.interes }}%</p>
            </div>
            
            <table class="history-table">
              <thead>
                <tr>
                  <th>Periodo</th>
                  <th>Cuota</th>
                  <th>Interés</th>
                  <th>Capital</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="amort in loan.amortizationTable" :key="amort.numero_cuota">
                  <td>{{ amort.numero_cuota }}</td>
                  <td>${{ formatNumber(amort.monto_cuota) }}</td>
                  <td>${{ formatNumber(amort.interes_cuota) }}</td>
                  <td>${{ formatNumber(amort.capital_cuota) }}</td>
                  <td>${{ formatNumber(amort.saldo_restante) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p v-else-if="hasSearched" class="no-results">
          No se encontraron préstamos para este cliente.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import LoanController from "@/controllers/LoanController";
  
  export default {
    name: 'HistoryView',
    
    data() {
      return {
        clientEmail: "",
        loans: [],
        isLoading: false,
        error: null,
        hasSearched: false
      };
    },
  
    methods: {
      formatNumber(value) {
        return value.toLocaleString('es-ES', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      },
  
      async fetchLoanHistory() {
        this.isLoading = true;
        this.error = null;
        this.hasSearched = true;
  
        try {
          console.log('Buscando préstamos para:', this.clientEmail);
          const result = await LoanController.getLoanHistoryByEmail(this.clientEmail);
          
          if (result.success) {
            console.log('Préstamos encontrados:', result.data);
            this.loans = result.data;
          } else {
            this.error = result.message || "Error al obtener el historial.";
            this.loans = [];
          }
        } catch (error) {
          console.error("Error al obtener el historial:", error);
          this.error = "Error al obtener el historial. Por favor, intenta de nuevo.";
          this.loans = [];
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .history-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-form {
    margin-bottom: 30px;
  }
  
  .form-group {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .form-group input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  .loan-section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .loan-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .history-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .history-table th,
  .history-table td {
    padding: 12px;
    text-align: right;
    border: 1px solid #ddd;
  }
  
  .history-table th {
    background-color: #f5f5f5;
  }
  
  .loading-message,
  .error-message,
  .no-results {
    text-align: center;
    padding: 20px;
    margin: 20px 0;
  }
  
  .error-message {
    color: #dc3545;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
  }
  
  .loading-message {
    color: #004085;
    background-color: #cce5ff;
    border: 1px solid #b8daff;
    border-radius: 4px;
  }
  
  .no-results {
    color: #856404;
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    border-radius: 4px;
  }
  </style>