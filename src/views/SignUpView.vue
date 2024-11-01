<template>
  <div class="signup-page">
    <div class="signup-form-section">
      <div class="signup-form">
        <!-- Logo sobre el formulario -->
        <img :src="logo" alt="Logo" class="logo" />
        <h1>{{ texts.title }}</h1>
        <p class="subtitle">{{ texts.subtitle }}</p>
        <form @submit.prevent="handleSignUp">
          <div class="form-group">
            <label for="name">{{ texts.nameLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">person</span>
              <input
                type="text"
                id="name"
                v-model="name"
                :placeholder="texts.namePlaceholder"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="address">{{ texts.addressLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">home</span>
              <input
                type="text"
                id="address"
                v-model="address"
                :placeholder="texts.addressPlaceholder"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="phone">{{ texts.phoneLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">phone</span>
              <input
                type="tel"
                id="phone"
                v-model="phone"
                :placeholder="texts.phonePlaceholder"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email">{{ texts.emailLabel }}</label>
            <div class="input-icon">
              <span class="material-icons">email</span>
              <input
                type="email"
                id="email"
                v-model="email"
                :placeholder="texts.emailPlaceholder"
                required
              />
            </div>
          </div>
          <button type="submit" class="signup-button">{{ texts.signUpButton }}</button>
        </form>
        <p class="login-link">
          {{ texts.haveAccount }} <router-link to="/login">{{ texts.loginLink }}</router-link>
        </p>
      </div>
    </div>

    <div class="illustration-section">
      <img :src="illustration" alt="Illustration" />
    </div>
  </div>
</template>

<script>
import texts from "@/constants/text";

export default {
  data() {
    return {
      texts: texts.signup, // Accede a los textos de la sección signup
      name: "",
      address: "",
      phone: "",
      email: "",
      logo: require("@/assets/logo_sf.png"),
      illustration: require("@/assets/sign_up.png"),
    };
  },
  methods: {
    handleSignUp() {
      console.log("User information:", {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
      });
      alert("Sign up successful!"); // Mensaje temporal
    },
  },
};
</script>

<style scoped>
.signup-page {
  display: flex;
  height: 100vh;
  background-color: #f4f7fa;
}

.signup-form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ffffff;
  padding: 2rem;
}

.signup-form {
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

.signup-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
}

.login-link {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #333;
}

.login-link a {
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
