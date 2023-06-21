<template>
  <header>
    <h1>Calculadora</h1>
  </header>
  <nav></nav>

  <section>
    <div id="myApp4">
      <div class="container">
        <div></div>

        <div class="calculadora">
          <label id="idEntrada" class="labelCalculadora">{{ entrada }}</label>

          <button v-on:click="agregarToLabel('1')">1</button>
          <button v-on:click="agregarToLabel('2')">2</button>
          <button v-on:click="agregarToLabel('3')">3</button>
          <button v-on:click="agregarToLabel('+')">+</button>

          <button v-on:click="agregarToLabel('4')">4</button>
          <button v-on:click="agregarToLabel('5')">5</button>
          <button v-on:click="agregarToLabel('6')">6</button>
          <button v-on:click="agregarToLabel('-')">-</button>

          <button v-on:click="agregarToLabel('7')">7</button>
          <button v-on:click="agregarToLabel('8')">8</button>
          <button v-on:click="agregarToLabel('9')">9</button>
          <button v-on:click="agregarToLabel('*')">*</button>

          <button v-on:click="agregarToLabel('0')" class="botonGrande">
            0
          </button>
          <button v-on:click="agregarToLabel('/')">/</button>
          <button v-on:click="calculoComputado">=</button>
        </div>
      </div>
    </div>
  </section>

  <footer></footer>
</template>

<script>
export default {
  name: "Calculadora",
  //hay que dar un nombre especifico a los componentes
  data() {
    return {
      entrada: "",
      valor: false,
    };
  },
  methods: {
    calculo() {
      this.entrada = eval(this.entrada);
    },
    
    agregarToLabel(entrada) {
      if (this.valor == false) {
        this.entrada += entrada;
      } else {
        this.entrada = entrada;
        this.valor = false;
      }
    },
  },
  computed: {
    calculoComputado() {
      console.log("Entro al metodo calculo computado");
      try {
        this.entrada = eval(this.entrada);
        this.valor = true;
      } catch (error) {
        this.entrada = "";
                this.valor = true;

      }
    },
  },
};
</script>

<style>
.container {
  /*El container para poder manipular los elementos 
    que están adentro siempre le vamos a poner un display 
    tipo flex, me permite manipular su ubicación de manera
     mas sencilla*/
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  background-image: url(../assets/numerospn.png);
}

.calculadora {
  display: grid;
  /*grid de 4 columnas y con un ancho de 75px*/
  grid-template-columns: repeat(4, 75px);
  /*para un numero especifico de filas*/
  grid-template-rows: repeat(5, 30px);
  background-color: rgb(5, 61, 61);
  padding: 20px;
  border-radius: 35px;
  box-shadow: 5px 2.5px 2.5px 2.5px black;
}
h1 {
  color: white;
}

.botonGrande {
  /*expande este elemento del tamano de 2 columnas del grid*/
  grid-column: span 2;
}
button {
  width: auto;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 2px;
  margin-bottom: 2px;

  background-color: rgb(133, 227, 227);

  font-size: 20px;
  border: 2px solid #000;
  border-radius: 35px;
}

button:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 115);
}

.labelCalculadora {
  border: 3px inset #000;
  margin-bottom: 5px;
  border-radius: 35px;
  background: rgb(248, 250, 251);

  grid-column: span 4;
}
</style>