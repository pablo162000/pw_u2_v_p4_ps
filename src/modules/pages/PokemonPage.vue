<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <Pokemonimg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />

    <PokemonOps
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
  </div>
</template>

<script>
import Pokemonimg from "../components/Pokemonimg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

console.log(obtenerFachadaPokemons());

export default {
  components: {
    Pokemonimg,
    PokemonOps,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,
    };
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      this.pokemonArr = arregloPokemons;
      console.log("hola" + arregloPokemons);
      console.log("funciona" + this.pokemonArr);
      const indicePokemon = Math.floor(Math.random() * 4);

      console.log(indicePokemon);
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
      console.log("este es:" + this.pokemonCorrecto);
    },
    revisarSeleccion(idSeleccionado) {
      console.log("evento padre");
      console.log("evento en el padre");

      console.log(idSeleccionado);

      console.log(this.pokemonCorrecto.id);

      if (this.pokemonCorrecto.id == idSeleccionado) {
        this.showPokemon = true;

        console.log("Felicitaciones");
      } else {
        this.showPokemon = false;

        console.log("Error");
      }
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