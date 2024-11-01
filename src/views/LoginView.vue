<template>
  <div class="login-page">
    <div class="login-form-section">
      <div class="login-form">
        <img :src="logo" alt="Logo" class="logo" />
        <h1>{{ texts.title }}</h1>
        <p class="subtitle">{{ texts.subtitle }}</p>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">{{ texts.usernameLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">person</span>
              <input
                type="text"
                id="email"
                v-model="email"
                :placeholder="texts.usernamePlaceholder"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password">{{ texts.passwordLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">lock</span>
              <input
                type="password"
                id="password"
                v-model="password"
                :placeholder="texts.passwordPlaceholder"
                required
              />
            </div>
          </div>
          <button type="submit" class="login-button">{{ texts.loginButton }}</button>
          <a href="#" class="forgot-password">{{ texts.forgotPassword }}</a>
        </form>
        <!-- Enlace para ir a la página de registro -->
        <p class="signup-link">
          {{ texts.noAccount }} <router-link to="/signup">{{ texts.signUpLink }}</router-link>
        </p>
      </div>
    </div>

    <div class="illustration-section">
      <img :src="illustration" alt="Illustration" />
    </div>
  </div>
</template>

<script>
import texts from "@/constants/text"; // Importa los textos de la aplicación

export default {
  data() {
    return {
      texts: texts.login, // Accede a los textos de la sección login
      email: "",
      password: "",
      logo: require("@/assets/logo_sf.png"),
      illustration: require("@/assets/animated_sf.png"),
    };
  },
  methods: {
    handleLogin() {
      console.log("Login attempted with", this.email, this.password);
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
  background-color: #f4f7fa;
}

.login-form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ffffff;
  padding: 2rem;
}

.login-form {
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.logo {
  width: 80px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: #555;
}

.input-icon {
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0.5rem;
}

.input-icon .material-icons {
  color: #888;
  margin-right: 0.5rem;
}

.input-icon input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
}

.forgot-password {
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  font-size: 0.875rem;
}

.signup-link {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #333;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

/* Sección derecha para la ilustración */
.illustration-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #e3f2fd;
  padding: 2rem;
}

.illustration-section img {
  width: 70%;
  max-width: 500px;
}
</style>
