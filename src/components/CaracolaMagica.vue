<template>
  <h1>Caracola Magica</h1>
  <img
    src="https://ichef.bbci.co.uk/news/800/cpsprodpb/8B70/production/_102469653_gettyimages-962792890.jpg"
    alt="No se puede cargara la imagen"
  />
  <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
  <p>Recuerda terminar con un enter la pregunta</p>
  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>Si</h1>
  </div>
</template>



<script>
export default {
data(){
    return {
        pregunta: 'Hola Mundo'
    }
}


};
</script>

<style>
</style>