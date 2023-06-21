<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--  <Contador titulo="Estudiante" valor2 ="2"/>
  <Contador titulo="Profesor" valor2 ="7"/>
  <Contador titulo="TestTitulo" valor2 ="7"/>-->


  <ComponenteCalculadora></ComponenteCalculadora>
</template>

<script>
import ComponenteCalculadora from "./components/ComponenteCalculadora.vue";
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    ComponenteCalculadora,
    Contador,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
