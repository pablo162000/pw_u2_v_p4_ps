<template>
  <div class="container">
    <div class="reglas">
      <h1 v-if="!pokemonCorrecto">Espere por favor</h1>
      <div v-else>
        <h1>Juego Pokemon</h1>

        <div class="vista1" v-if="ocultarJuego">
          <div class="datos">
            <label>Puntuacion: {{ puntuacion }}</label>
            <label>Intento: {{ intento }} </label>
          </div>
          
            <Pokemonimg
              :pokemonId="pokemonCorrecto.id"
              :muestraPokemon="showPokemon"
            />
          

          <div class="opciones">
            <PokemonOps
              style="color: black"
              :opciones="pokemonArr"
              @seleccionado="revisarSeleccion($event)"
            />
          </div>
        </div>
        <div class="vistaganaste" v-if="mostrarvictoria">
          <label for="">Gano el juego</label>
          <label for="">Puntaje: {{ puntuacion }}</label>
        </div>
        <div class="vistaperdiste" v-if="mostrarderrota">
          <label for="">Perdiste</label>
        </div>
        <button v-if="mostrarBoton" @click="reiniciarJuego()">Reiniciar</button>
      </div>
    </div>
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
      intento: 0,
      puntuacion: 0,
      mostrarvictoria: false,
      mostrarderrota: false,
      mostrarBoton: false,
      ocultarJuego: true,
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

      if (
        this.intento < 3 &&
        this.mostrarvictoria == false &&
        this.mostrarderrota == false
      ) {
        if (this.pokemonCorrecto.id == idSeleccionado) {
          this.showPokemon = true;
          this.intento++;

          switch (this.intento) {
            case 1:
              {
                this.puntuacion = 5;
                this.mostrarvictoria = true;
                this.mostrarBoton = true;
              }
              break;
            case 2:
              {
                this.puntuacion = 3;

                this.mostrarvictoria = true;
                this.mostrarBoton = true;
              }
              break;
            case 3:
              {
                this.puntuacion = 1;

                this.mostrarderrota = true;
                this.mostrarBoton = true;
              }
              break;
            default:
              this.intento;
              this.puntuacion;
          }

          console.log("Felicitaciones");
        } else {
          this.showPokemon = false;
          this.intento++;

          this.puntuacion = 0;
          if (this.intento == 3) {
            this.mostrarderrota = true;
            this.mostrarBoton = true;
          }

          console.log("Error");
        }
      }
    },

    async reiniciarJuego() {
      this.intento = 0;
      this.puntuacion = 0;
      this.mostrarderrota = false;
      this.mostrarvictoria = false;
      this.pokemonCorrecto = null;
      await this.cargaJuegoInicial();
      this.showPokemon = false;
    },
  },
  mounted() {
    console.log("Se monto el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.datos {
  display: grid;
}
.vistaganaste {
  display: grid;
}

.opciones {
  margin-top: 100px;
}


</style>

