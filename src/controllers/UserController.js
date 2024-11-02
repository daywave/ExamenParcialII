import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users'; // Asegúrate de que esta URL sea correcta

export default {
    async signup(user) {
        try {
            const response = await axios.post(`${API_URL}/signup`, {
                nombre: user.nombre,
                correoElectronico: user.correoElectronico,
                telefono: user.telefono,
                password: user.password,
                direccion: user.direccion
            });
            return { success: true, message: response.data.message };
        } catch (error) {
            console.error("Error al registrar usuario:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.error : 'Error de servidor' };
        }
    },

    async login(user) {
        try{
            console.log("datos de usuario", user);
            const response = await axios.post(`${API_URL}/login`, {
                correoElectronico: user.correoElectronico,
                password: user.password
            });
            return { success: true, message: response.data.message, token: response.data.token };
        }catch(error){
            console.error("Error al iniciar sesión:", error.response ? error.response.data : error.message);
            return { success: false, message: error.response ? error.response.data.error : 'Error de servidor' };
        }
    },

    
    logout() {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    }
};
