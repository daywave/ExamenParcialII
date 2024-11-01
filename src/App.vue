<template>
  <div id="app">
    <router-view></router-view> <!-- Renderiza la vista actual en función de la ruta -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>