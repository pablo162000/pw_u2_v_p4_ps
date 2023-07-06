<template>
  <div class="contenedor-opciones">
    <ul>
      <!--  <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>-->
      <li v-for="pokemon in opciones" :key="pokemon.id" @:click="$emit('seleccionado', pokemon.id)"    >{{ pokemon.nombre }}</li>
    
    </ul>
  </div>
</template>

<script>
export default {
props: {
  opciones : {
    type: Array,
    required: true
  },
  methods: {
    pruevaDeEvento(){
      console.log("prueba de evento")
    }
  }
}

};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}
.contenedor-opciones {
  display: flex;
  justify-content: center;
}

li:hover {
  background-color: aqua;
}
</style>