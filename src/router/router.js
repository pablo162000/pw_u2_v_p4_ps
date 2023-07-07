import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

    {
        path: "/",
        component: ()=> import('../modules/pages/BienvenidaPage')
    },
     {
        path: "/juego",
        component: ()=> import('../modules/pages/JuegoPage')
    },
    {
        path: "/premios",
        component: ()=> import('../modules/pages/PremiosPage')
    }
    ,
    {
        path: "/pokemonJuego",
        component: ()=> import('../modules/pages/PokemonPage')
    },
    {
        path: "/:pathMatch(.*)*",
        component:()=> import('../modules/pages/NoEncontradaPage')
    }

]


const router = createRouter({

    history: createWebHashHistory(),
    routes
})

export default router 