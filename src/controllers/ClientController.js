import axios from 'axios';

const API_URL = 'http://localhost:3000/api/clients';

export default {
    async registerClient(client) {
        try {
            const token = localStorage.getItem('token');

            // Crea el objeto `clientData` sin `id_usuario` ya que será manejado en el backend
            const clientData = {
                nombre: client.nombre,
                direccion: client.direccion,
                telefono: client.telefono,
                correo_electronico: client.correoElectronico // Asegúrate de usar `correo_electronico` aquí
            };

            console.log('Datos del cliente a enviar desde el frontend:', clientData);
            console.log('Token enviado:', `Bearer ${token}`);

            const response = await axios.post(API_URL, clientData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Envía el token en el encabezado
                    'Content-Type': 'application/json'
                },
            });

            return { success: true, message: response.data.message };
        } catch (error) {
            console.error('Error al registrar cliente:', error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.error : 'Error de servidor' };
        }
    },
};
