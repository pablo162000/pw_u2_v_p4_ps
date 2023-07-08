<template>
  <div class="contenedor">
    <img src="../store/bienvenida2.png" alt="no se carga" />
    <h1 class="texto" style="color: white">Al Juego que te hara millonario</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-image: url("../store/fondoPokemonhd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  margin-top: 40px;
  margin-left: 100px;
}

.contenedor {
    display: grid;
    grid-template-columns: repeat(2, 700px);

}
.texto {
  margin-top: 250px;
  font-size: 40px;
}
</style>