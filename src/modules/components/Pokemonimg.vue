<template>
  <div class="contenedor-imagen">
    <img
      class="oculta-pokemon"
      :src="imagenFuente"
      alt="no se puede mostra imagen"
    />

    <img v-if="muestraPokemon"  :src="imagenFuente" alt="no se puede mostra imagen" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon:{
      type: Boolean,
      required:true
    }
  },

  computed: {
    imagenFuente() {
     /* return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );*/

      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      
    },
  },
};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

img {
  /*ccon este estilo es como el elemento sale flotando*/
  position: absolute;
  height: 200px;
  right: 43%;
}
.contenedor-imagen {
  height: 200px;
}
</style>