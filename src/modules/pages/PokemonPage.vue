<template>
  <h1>Juego Pokemon</h1>
  <Pokemonimg :pokemonId="6" :muestraPokemon="false" />

  <PokemonOps :opciones="arreglo"></PokemonOps>
</template>

<script>
import PokemonOps from "../components/PokemonOps.vue";
import Pokemonimg from "../components/Pokemonimg.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

console.log(obtenerFachadaPokemons());

export default {
  components: {
    PokemonOps,
    Pokemonimg,
  },
  data(){
    return{
        arreglo:[]
    }

  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.arreglo=arregloPokemons
      console.log(arregloPokemons);
    },
  },
  mounted() {
    console.log("Se monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
</style>