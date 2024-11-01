
# Examen Parcial - Seminario De Sistemas Computacionales II

Este repositorio contiene el proyecto del examen parcial para la materia **Seminario de Sistemas Computacionales II**. El objetivo del proyecto es desarrollar una aplicación web que permita a los usuarios registrarse, iniciar sesión y gestionar datos de manera eficiente, cumpliendo con métricas de calidad de software.

## Tabla de Contenidos
- [Guía de Instalación](#guía-de-instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Métricas de Software Evaluadas](#métricas-de-software-evaluadas)

## Guía de Instalación

1. **Clonar el Repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-repositorio
   ```

2. **Instalar Dependencias**

   Este proyecto utiliza Node.js y Vue.js. Asegúrate de tener **Node.js** instalado en tu sistema. Luego, instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

## Ejecución del Proyecto

Para ejecutar el proyecto en un entorno de desarrollo, utiliza el siguiente comando:

```bash
npm run serve
```

Este comando levantará el servidor de desarrollo, y podrás acceder al proyecto desde tu navegador en la dirección [http://localhost:8080](http://localhost:8080).

Para compilar el proyecto para un entorno de producción:

```bash
npm run build
```

## Arquitectura del Proyecto

La arquitectura del proyecto está organizada en **Vue.js** siguiendo el patrón **MVC (Modelo-Vista-Controlador)** y una estructura modular, lo cual facilita la mantenibilidad y escalabilidad del código.

- **Modelos**: Manejan la lógica de datos y estado de la aplicación.
- **Vistas**: Componentes de la interfaz de usuario que se muestran al usuario.
- **Controladores**: Gestionan la interacción entre los modelos y las vistas, incluyendo la lógica de negocio y la gestión de la autenticación.

### Estructura de Carpetas

- **`src/`**: Contiene el código fuente de la aplicación.
  - **`components/`**: Componentes reutilizables de la aplicación.
  - **`constants/`**: Archivo para centralizar todas las cadenas de texto (`texts.js`) y evitar el hardcodeo.
  - **`views/`**: Vistas principales de la aplicación (por ejemplo, Login y Sign Up).
  - **`controllers/`**: Controladores que manejan la lógica de negocio.
  - **`router/`**: Configuración de las rutas de la aplicación.
  - **`assets/`**: Archivos estáticos como imágenes y estilos.

## Métricas de Software Evaluadas

El proyecto se evalúa bajo varias métricas de calidad de software, enfocándose en la claridad, calidad y mantenibilidad del código:

1. **Métricas de Código**
   - **Modularidad y Organización**: El proyecto está estructurado en módulos, con componentes y controladores organizados en archivos separados.
   - **Consistencia de Estilo**: Se sigue una convención de nombres y estilo de código uniforme.

2. **Métricas de Pruebas**
   - **Pruebas Unitarias**: Se deben implementar pruebas unitarias para los métodos clave (ej. `handleLogin` y `handleSignUp`).
   - **Pruebas de Integración**: Evaluación de la interacción entre componentes y flujo de navegación (ej. Login y Sign Up).
   - **Cobertura de Pruebas**: Para asegurar una adecuada cobertura y detección de errores.

3. **Métricas de Mantenimiento**
   - **Modularidad**: La aplicación está dividida en modelos, vistas y controladores para facilitar futuras modificaciones.
   - **Centralización de Textos**: Todas las cadenas de texto están centralizadas en el archivo `texts.js`, facilitando su modificación sin afectar el código.
   - **Documentación**: El código incluye comentarios y el proyecto está documentado para facilitar su comprensión.

## Contribución

Este proyecto es parte de un examen, por lo que no se aceptan contribuciones externas. Sin embargo, si encuentras algún problema, puedes abrir un issue para su revisión.
