import axios from 'axios';

const API_URL = 'http://localhost:3000/api/loans';

export default {
    // Método para registrar un préstamo
    async registerLoan(loanData, clientEmail) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No se encontró un token. Por favor, inicia sesión.');
            }

            // Crea el objeto de datos del préstamo incluyendo el correo del cliente
            const loanPayload = {
                monto: loanData.monto,
                meses: loanData.meses,
                interes: loanData.interes,
                correo_electronico: clientEmail // Incluye el correo electrónico del cliente
            };

            console.log('Datos del préstamo a enviar desde el frontend:', loanPayload);
            console.log('Token enviado:', `Bearer ${token}`);

            const response = await axios.post(API_URL, loanPayload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            return { success: true, message: response.data.message, data: response.data };
        } catch (error) {
            console.error('Error al registrar préstamo:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.error : 'Error de servidor' };
        }
    },

    // Método para obtener el historial de préstamos basado en el correo del cliente
    async getLoanHistoryByEmail(clientEmail) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No se encontró un token. Por favor, inicia sesión.');
            }

            const response = await axios.get(`${API_URL}/history`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    correo_electronico: clientEmail
                }
            });

            return { success: true, data: response.data.data };
        } catch (error) {
            console.error('Error al obtener historial:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.error : 'Error de servidor' };
        }
    },
};
