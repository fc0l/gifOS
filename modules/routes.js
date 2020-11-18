import { api_key } from './input.js';

export const navbar_favoritos = document.getElementById("navbar-favoritos");
export const navbar_mis_gifos = document.getElementById("navbar-mis-gifos");
export const navbar_button_crear = document.getElementById("nav-bar-button")
export let ventana_activa_mis_gifos = false;
export let ventana_activa_fav = false;
export let ventana_activa_crear_gifo = false;

navbar_favoritos.addEventListener("click", ventana_favoritos);
navbar_mis_gifos.addEventListener("click", ventana_mis_gifos);
navbar_button_crear.addEventListener("click", ventana_crear_gifo);

const header = document.getElementById("header");
const search_container = document.getElementById("search-container");
const treding_text = document.getElementById("trending-text");
const favoritos = document.getElementById("favoritos");
const favoritos_sin_contenido = document.getElementById("favoritos-sin-contenido");
const mis_gifos = document.getElementById("mis-gifos");
const mis_gifos_sin_contenido = document.getElementById("mis-gifos-sin-contenido");
const crear_gifo_1 = document.getElementById("crear-gifo-1");
const results_gifos = document.getElementById("results-gifos");
export const sin_resultados_gifos = document.getElementById("sin-resultados-gifos");
const trending_gifos = document.getElementById("trending-gifos");
const gifmax = document.getElementById("gifmax");


const matriz = [];

function ventana_favoritos() {

    let stringId = localStorage.getItem("favoritos").split(',').slice(1);
    console.log(stringId.toString());


    
    if (stringId.length > 0){
        header.style.display = "none";
        favoritos_sin_contenido.style.display = "none";
        search_container.style.display = "none";
        treding_text.style.display = "none";
        trending_gifos.style.display = "block";      
        mis_gifos.style.display = "none";
        mis_gifos_sin_contenido.style.display = "none";
        crear_gifo_1.style.display = "none";
        results_gifos.style.display = "none";
        sin_resultados_gifos.style.display = "none";
        gifmax.style.display = "none";
        favoritos.style.display = "block";

        fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${stringId}`)
        .then(resp => resp.json())
        .then(json => {
            favoritos
            
        });

    } else {
        header.style.display = "none";
        favoritos.style.display = "none";
        favoritos_sin_contenido.style.display = "block";
        search_container.style.display = "none";
        treding_text.style.display = "none";
        trending_gifos.style.display = "block";      
        mis_gifos.style.display = "none";
        mis_gifos_sin_contenido.style.display = "none";
        crear_gifo_1.style.display = "none";
        results_gifos.style.display = "none";
        sin_resultados_gifos.style.display = "none";
        gifmax.style.display = "none";        
    }

    navbar_favoritos.style.color = "#9CAFC3";

    if(localStorage["dark_on_load"] === "true"){
        navbar_mis_gifos.style.color = "#FFFFFF";
        navbar_button_crear.style.background = 'url("../assets/CTA-crear-gifo-modo-noc.svg")';
    } else {
        navbar_mis_gifos.style.color = "#572EE5";
        navbar_button_crear.style.background = 'url("./assets/button-crear-gifo.svg")';
    }
    ventana_activa_fav = true;
    ventana_activa_mis_gifos = false;
    ventana_activa_crear_gifo = false;
    
};

export function ventana_mis_gifos () {
    if (matriz.length > 0){
        header.style.display = "none";
        favoritos.style.display = "none";
        favoritos_sin_contenido.style.display = "none";
        search_container.style.display = "none";
        treding_text.style.display = "none";
        trending_gifos.style.display = "block";      
        mis_gifos.style.display = "block";
        mis_gifos_sin_contenido.style.display = "none";
        crear_gifo_1.style.display = "none";
        results_gifos.style.display = "none";
        sin_resultados_gifos.style.display = "none";
        gifmax.style.display = "none";   
    } else {
        header.style.display = "none";
        favoritos.style.display = "none";
        favoritos_sin_contenido.style.display = "none";
        search_container.style.display = "none";
        treding_text.style.display = "none";
        trending_gifos.style.display = "block";      
        mis_gifos.style.display = "none";
        mis_gifos_sin_contenido.style.display = "block";
        crear_gifo_1.style.display = "none";
        results_gifos.style.display = "none";
        sin_resultados_gifos.style.display = "none";
        gifmax.style.display = "none";     
    }

    navbar_mis_gifos.style.color = "#9CAFC3";

    if(localStorage["dark_on_load"] === "true"){
        navbar_favoritos.style.color = "#FFFFFF";
        navbar_button_crear.style.background = 'url("../assets/CTA-crear-gifo-modo-noc.svg")';
    } else {
        navbar_favoritos.style.color = "#572EE5";
        navbar_button_crear.style.background = 'url("./assets/button-crear-gifo.svg")';
    }
    
    ventana_activa_fav = false;
    ventana_activa_mis_gifos = true;
    ventana_activa_crear_gifo = false;
};

export function ventana_crear_gifo () {

    header.style.display = "none";
    favoritos.style.display = "none";
    favoritos_sin_contenido.style.display = "none";
    search_container.style.display = "none";
    treding_text.style.display = "none";
    trending_gifos.style.display = "none";
    mis_gifos.style.display = "none";
    mis_gifos_sin_contenido.style.display = "none";
    crear_gifo_1.style.display = "grid";
    results_gifos.style.display = "none";
    sin_resultados_gifos.style.display = "none";
    gifmax.style.display = "none";

    navbar_button_crear.style.background = 'url("../assets/CTA-crear-gifo-active.svg")';

    if (localStorage["dark_on_load"] === "true") {
        navbar_mis_gifos.style.color = "#FFFFFF";
        navbar_favoritos.style.color = "#FFFFFF";
    } else {
        navbar_mis_gifos.style.color = "#572EE5";
        navbar_favoritos.style.color = "#572EE5";
    }
    ventana_activa_fav = false;
    ventana_activa_mis_gifos = false;
    ventana_activa_crear_gifo = true;
}