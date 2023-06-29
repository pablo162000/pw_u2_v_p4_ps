<template>
    <h1>Juego Pokemon</h1>
    <Pokemonimg :pokemonId="6" :muestraPokemon="false"/>
    <Pokemonimg :pokemonId="69" :muestraPokemon="true"/>

    <PokemonOps></PokemonOps>

  
</template>

<script>

import PokemonOps from "../components/PokemonOps.vue"
import Pokemonimg from "../components/Pokemonimg.vue"


export default {
    components: {
        PokemonOps,
        Pokemonimg
    }



}
</script>

<style>

</style>