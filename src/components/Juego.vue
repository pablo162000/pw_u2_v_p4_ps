<template>
  <div class="container">
    <div class="juego">
      <h1>Juego</h1>
      <img v-if="rutaImagen" v-bind:src="rutaImagen" alt="No se puede cargar" />
      <label>{{ respuesta }}</label>
      <button v-on:click="jugar()">Iniciar</button>

      <img
        v-if="rutaImagen1"
        v-bind:src="rutaImagen1"
        alt="No se puede cargar"
      />
      <label>{{ respuesta1 }}</label>

      <label id="felicidades"  v-if="ambasRespuestasSonSi">Felicidades</label> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respuesta: "",
      rutaImagen: null,
      respuesta1: "",
      rutaImagen1: null,
    };
  },
  computed: {
    ambasRespuestasSonSi() {
      return this.respuesta == "yes" && this.respuesta1 == "yes";
    },
  },
  methods: {
    async consumirApi(valor) {
      const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      const { answer, image } = respuesta;

      switch (valor) {
        case 1:
          this.respuesta = answer;
          this.rutaImagen = image;
          break;
        case 2:
          this.respuesta1 = answer;
          this.rutaImagen1 = image;
          break;
      }
    },

    async jugar() {
      this.consumirApi(1);
      this.consumirApi(2);
    },
  },
};
</script>


<style>

.container {
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: aquamarine;
}
img{
  max-height: 100%;
  max-width: 100%;
  height: 50vh;
  width: 50vw;
}
.juego {
    display: grid;
}

#felicidades {
  color: red ;
  
  font-size: 20px;
}

</style>