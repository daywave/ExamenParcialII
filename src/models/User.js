class User {
    constructor(id = null, nombre = '', correoElectronico = '', telefono = '', password = '', direccion = '') {
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.telefono = telefono;
        this.password = password;
        this.direccion = direccion;
    }
}

export default User;
