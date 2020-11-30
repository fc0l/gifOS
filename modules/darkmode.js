import { ventana_activa_fav, ventana_activa_mis_gifos, ventana_activa_crear_gifo} from "./routes.js";

const lila = "#572ee5";
const blanco = "#ffffff";
const gris = "#37383C";
const negro = "#000000";
const negro2 = "#222326";
const modo_nocturno = document.getElementById("modo-nocturno");
const logo = document.getElementById("logo");
const logo_noc = document.getElementById("logo-modo-noc");
const list_ul = document.getElementById("nav-bar-list-ul");
const list = document.getElementById("nav-bar-list");
const navbar_mis_gifos = document.getElementById("navbar-mis-gifos");
const navbar_favoritos = document.getElementById("navbar-favoritos");
const navbar_button = document.getElementById("nav-bar-button");
const body = document.body;
const nav_bar = document.getElementById("navbar");
const header_h1 = document.getElementById("header-h1");
const search_input = document.getElementById("search-input");
const search_icon_focus = document.getElementById("search-box-icon-focus");
const search_container = document.getElementById("search-container");
const search_icon = document.getElementById("search-icon");
export const trending_text = document.getElementById("trending-text");
export const trending_text_p = document.getElementById("trending-text-p");
export const trending_text_a = document.getElementById("trending-text-a");
const trending_gifos = document.getElementById("trending-gifos");
const trending_gifos_title = document.getElementById("trending-gifos-header-title");
const button_noc_left = document.getElementById("button-mod-noc");
const button_noc_right = document.getElementById("button-mod-noc2");
const footer = document.getElementById("footer");
const gifmax = document.getElementById("gifmax");
const gifmax_close = document.getElementById("gifmax-close");
const gifmax_text = document.getElementById("gifmax-text");
const gifmax_left = document.getElementById("gifmax-left");
const gifmax_right = document.getElementById("gifmax-right");
export const results_gifos_h2 = document.getElementById("results-gifos-h2");
export const results_gifos_vermas = document.getElementById("results-gifos-button");
export const results_gifos_h2_w = document.getElementById("results-gifos-h2-w");
const favoritos_h2 = document.getElementById("favoritos-h2");
const favoritos_vermas = document.getElementById("favoritos-vermas");
const favoritos_h2_sc = document.getElementById("favoritos-h2-sc");
const mis_gifos_h2 = document.getElementById("mis-gifos-h2");
const mis_gifos_vermas = document.getElementById("mis-gifos-vermas");
const mis_gifos_sc_h2 = document.getElementById("mis-gifos-sc-h2");
const crear_gifo_camara = document.getElementById("crear-gifo-camara1");
const crear_gifo_cinta = document.getElementById("crear-gifo-cinta");
const crear_gifo_h2 = document.getElementById("crear-gifo-h2");
const crear_gifo_p = document.getElementById("crear-gifo-p");
const crear_gifo_number1 = document.getElementById("crear-gifo-number1");
const crear_gifo_number1_color = document.getElementById("crear-gifo-number1-color");
const crear_gifo_number2 = document.getElementById("crear-gifo-number2");
const crear_gifo_number2_color = document.getElementById("crear-gifo-number2-color");
const crear_gifo_number3 = document.getElementById("crear-gifo-number3");
const crear_gifo_number3_color = document.getElementById("crear-gifo-number3-color");
const crear_gifo_barra = document.getElementById("crear-gifo-barra");
const crear_gifo_comenzar = document.getElementById("crear-gifo-comenzar");
const crear_gifo_grabar = document.getElementById("crear-gifo-grabar");
const crear_gifo_finalizar = document.getElementById("crear-gifo-finalizar");
const crear_gifo_subir = document.getElementById("crear-gifo-subir");
const crear_gifo_time = document.getElementById("crear-gifo-time");
const crear_gifo_repetir = document.getElementById("crear-gifo-repetir");
const crear_gifo_content2 = document.getElementById("crear-gifo-content2");
const crear_gifo_content2p = document.getElementById("crear-gifo-content2p");
const nav_bar_burger = document.getElementById("nav-bar-burger");
const nav_bar_cancel = document.getElementById("nav-bar-cancel");
export const mobile = window.matchMedia("(max-width: 767px)").matches;
let dark_on_load = localStorage["dark_on_load"];



// configuracion del modo oscuro

let dark = false;

window.onload = function(){
    if(localStorage['dark_on_load'] == 'true') {
        isDark();
        dark = true;
    }
}

modo_nocturno.addEventListener('click', modoNocturno);

search_input.addEventListener("focus", changeIcon);

search_icon.addEventListener("click", notChangeIcon);

navbar_button.addEventListener("mouseover", buttonHover0);

navbar_button.addEventListener("mouseout", buttonNoHover0);

button_noc_left.addEventListener("mouseover", buttonHoverL);

button_noc_left.addEventListener("mouseout", buttonNoHoverL);

button_noc_right.addEventListener("mouseover", buttonHoverR);

button_noc_right.addEventListener("mouseout", buttonNoHoverR);

gifmax_left.addEventListener("mouseover", buttonHover1);

gifmax_left.addEventListener("mouseout", buttonNoHover1);

gifmax_right.addEventListener("mouseover", buttonHover2);

gifmax_right.addEventListener("mouseout", buttonNoHover2);

results_gifos_vermas.addEventListener("mouseover", buttonHover3);

results_gifos_vermas.addEventListener("mouseout", buttonNoHover3);

favoritos_vermas.addEventListener("mouseover", buttonHover3);

favoritos_vermas.addEventListener("mouseout", buttonNoHover3);

mis_gifos_vermas.addEventListener("mouseover", buttonHover3);

mis_gifos_vermas.addEventListener("mouseout", buttonNoHover3);

crear_gifo_comenzar.addEventListener('mouseover', buttonHover4);

crear_gifo_comenzar.addEventListener('mouseout', buttonNoHover4);

crear_gifo_grabar.addEventListener('mouseover', buttonHover4);

crear_gifo_grabar.addEventListener('mouseout', buttonNoHover4);

crear_gifo_finalizar.addEventListener('mouseover', buttonHover4);

crear_gifo_finalizar.addEventListener('mouseout', buttonNoHover4);

crear_gifo_subir.addEventListener('mouseover', buttonHover4);

crear_gifo_subir.addEventListener('mouseout', buttonNoHover4);



function modoNocturno () {
    if(!dark)
    {
        isDark();
        dark = true;
        localStorage['dark_on_load'] = 'true';
    } 
    else 
    {       
        notDark();
        dark = false;
        localStorage['dark_on_load'] = 'false';
    }    
}

function isDark () {
    body.style.background = gris;
    nav_bar.style.borderColor = "black";        
    logo.style.display = "none";
    logo_noc.style.display = "block";
    list_ul.style.color = blanco;

    if(ventana_activa_fav) {
        navbar_favoritos.style.color = "#9CAFC3";
    } else {
        navbar_favoritos.style.color = "#FFFFFF";
    }

    if(ventana_activa_mis_gifos) {
        navbar_mis_gifos.style.color = "#9CAFC3";
    } else {
        navbar_mis_gifos.style.color = "#FFFFFF";
    }

    if(ventana_activa_crear_gifo){
        navbar_button.style.background = 'url("../assets/CTA-crear-gifo-active.svg")';
    } else {
        navbar_button.style.background = "url('../assets/CTA-crear-gifo-modo-noc.svg')";
    }

    modo_nocturno.innerHTML = "MODO DIURNO";
    header_h1.style.color = blanco;
    search_input.style.background = gris;
    search_input.style.color = blanco;
    search_container.style.borderColor = blanco;
    search_icon.style.background = 'url("./assets/icon-search-mod-noc.svg")';
    search_icon_focus.src = "./assets/icon-search-mod-noc.svg";
    search_icon_focus.style.visibility = "hidden";   
    trending_text.style.color = blanco;
    trending_text_a.style.color = blanco;
    trending_text_p.style.color = blanco;
    
    trending_gifos.style.background = negro2;
    trending_gifos.style.color = blanco;
    trending_gifos_title.style.color = blanco;
    button_noc_left.style.background = 'url("../assets/button-slider-left-md-noct.svg")';
    button_noc_right.style.background = 'url("../assets/button-slider-right-md-noct.svg")';
    footer.style.color = blanco;
    footer.style.borderColor = negro;
    gifmax.style.background = negro2;
    gifmax_close.style.background = "url('./assets/close-modo-noct.svg')";
    gifmax_text.style.color = blanco;
    gifmax_left.style.background = 'url("./assets/button-slider-left-md-noct.svg")';
    gifmax_right.style.background = 'url("./assets/button-slider-right-md-noct.svg")';
    results_gifos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';
    results_gifos_h2.style.color = blanco;
    results_gifos_h2_w.style.color = blanco;
    favoritos_h2.style.color = blanco;
    favoritos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';
    favoritos_h2_sc.style.color = blanco;
    mis_gifos_h2.style.color = blanco;
    mis_gifos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';
    mis_gifos_sc_h2.style.color = blanco;
    crear_gifo_camara.src = "./assets/camara-modo-noc.svg";
    crear_gifo_cinta.src = "./assets/pelicula-modo-noc.svg";
    crear_gifo_h2.style.color = blanco; 
    crear_gifo_p.style.color = blanco;
    crear_gifo_number1.style.background = 'url("./assets/paso-a-paso-mod-noc.svg")';
    crear_gifo_number1_color.style.background = 'url("./assets/paso-a-paso-hover-mod-noc.svg")';
    crear_gifo_number2.style.background = 'url("./assets/paso-a-paso-mod-noc-2.svg")';
    crear_gifo_number2_color.style.background = 'url("./assets/paso-a-paso-hover-mod-noc-2.svg")';
    crear_gifo_number3.style.background = 'url("./assets/paso-a-paso-mod-noc-3.svg")';
    crear_gifo_number3_color.style.background = 'url("./assets/paso-a-paso-hover-mod-noc-3.svg")';
    crear_gifo_barra.style.background = blanco;
    crear_gifo_comenzar.style.background = "none";
    crear_gifo_comenzar.style.borderColor = blanco;
    crear_gifo_comenzar.style.color = blanco;
    crear_gifo_grabar.style.background = "none";
    crear_gifo_grabar.style.borderColor = blanco;
    crear_gifo_grabar.style.color = blanco;
    crear_gifo_finalizar.style.background = "none";
    crear_gifo_finalizar.style.borderColor = blanco;
    crear_gifo_finalizar.style.color = blanco;
    crear_gifo_subir.style.background = "none";
    crear_gifo_subir.style.borderColor = blanco;
    crear_gifo_subir.style.color = blanco;
    crear_gifo_time.style.color = blanco;
    crear_gifo_repetir.style.color = blanco;
    crear_gifo_content2.style.color = blanco;
    crear_gifo_content2p.style.color = blanco;
    nav_bar_burger.style.background = "url('./assets/burger-modo-noct.svg')";
    nav_bar_cancel.style.background = "url('assets/close-modo-noct.svg')"; 
}

function notDark () {
    body.style.background = blanco;
    nav_bar.style.borderColor = lila;
    logo.style.display = "block";
    logo_noc.style.display = "none";
    list_ul.style.color = lila;

    if(ventana_activa_fav) {
        navbar_favoritos.style.color = "#9CAFC3";
    } else {
        navbar_favoritos.style.color = lila;
    }

    if(ventana_activa_mis_gifos) {
        navbar_mis_gifos.style.color = "#9CAFC3";
    } else {
        navbar_mis_gifos.style.color = lila;
    }

    if(ventana_activa_crear_gifo) {
        navbar_button.style.background = 'url("../assets/CTA-crear-gifo-active.svg")';
    } else {
        navbar_button.style.background = 'url("../assets/button-crear-gifo.svg")';
    }

    modo_nocturno.innerHTML = "MODO NOCTURNO";
    header_h1.style.color = lila;
    search_input.style.background = blanco;
    search_input.style.color = negro;
    search_container.style.borderColor = lila;
    search_icon.style.background = 'url("./assets/icon-search.svg")';
    search_icon_focus.src = "./assets/icon-search.svg";
    search_icon_focus.style.visibility = "hidden"; 
    trending_text.style.color = lila;
    trending_text_a.style.color = lila;
    trending_text_p.style.color = lila;
    
    trending_gifos.style.background = "#F3F5F8";
    trending_gifos.style.color = negro;
    trending_gifos_title.style.color = lila;
    button_noc_left.style.background = 'url("../assets/button-slider-left.svg")';
    button_noc_right.style.background = 'url("../assets/Button-Slider-right.svg")';
    footer.style.color = negro;
    footer.style.borderColor = lila;
    gifmax.style.background = blanco;
    gifmax_close.style.background = "url('./assets/close.svg')";
    gifmax_text.style.color = negro;
    gifmax_left.style.background = 'url("../assets/button-slider-left.svg")';
    gifmax_right.style.background = 'url("../assets/Button-Slider-right.svg")';
    results_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
    results_gifos_h2.style.color = lila;
    results_gifos_h2_w.style.color = lila;
    favoritos_h2.style.color = lila;
    favoritos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
    favoritos_h2_sc.style.color = lila;
    mis_gifos_h2.style.color = lila;
    mis_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
    mis_gifos_sc_h2.style.color = lila;
    crear_gifo_camara.src = "./assets/camara.svg";
    crear_gifo_cinta.src = "./assets/pelicula.svg";
    crear_gifo_h2.style.color = lila; 
    crear_gifo_p.style.color = negro;
    crear_gifo_number1.style.background = 'url("./assets/paso-a-paso.svg")';
    crear_gifo_number1_color.style.background = 'url("./assets/paso-a-paso-hover.svg")';
    crear_gifo_number2.style.background = 'url("./assets/paso-a-paso-2.svg")';
    crear_gifo_number2_color.style.background = 'url("./assets/paso-a-paso-hover-2.svg")';
    crear_gifo_number3.style.background = 'url("./assets/paso-a-paso-3.svg")';
    crear_gifo_number3_color.style.background = 'url("./assets/paso-a-paso-hover-3.svg")';
    crear_gifo_barra.style.background = lila;
    crear_gifo_comenzar.style.background = blanco;
    crear_gifo_comenzar.style.borderColor = lila;
    crear_gifo_comenzar.style.color = lila;
    crear_gifo_grabar.style.background = blanco;
    crear_gifo_grabar.style.borderColor = lila;
    crear_gifo_grabar.style.color = lila;
    crear_gifo_finalizar.style.background = blanco;
    crear_gifo_finalizar.style.borderColor = lila;
    crear_gifo_finalizar.style.color = lila;
    crear_gifo_subir.style.background = blanco;
    crear_gifo_subir.style.borderColor = lila;
    crear_gifo_subir.style.color = lila;
    crear_gifo_time.style.color = lila;
    crear_gifo_repetir.style.color = lila;
    crear_gifo_content2.style.color = lila;
    crear_gifo_content2p.style.color = negro;   
    nav_bar_burger.style.background = "url('./assets/burger.svg')";
    nav_bar_cancel.style.background = "url('assets/close.svg')";    
}

function changeIcon() {
    if(!mobile) {
        if(dark) {
            search_icon.style.background = 'url("./assets/close-modo-noct.svg")';
            search_icon.style.backgroundRepeat = "no-repeat";
            search_icon_focus.style.visibility = "visible";
            search_icon_focus.src = "./assets/icon-search-mod-noc.svg";
            
        }else {
            search_icon.style.background = 'url("./assets/close.svg")';
            search_icon.style.backgroundRepeat = "no-repeat";
            search_icon_focus.style.visibility = "visible";
            search_icon_focus.src = "./assets/icon-search.svg"; 
        }
    } else {
        if(dark) {
            search_icon.style.background = 'url("./assets/close-modo-noct.svg")';
            search_icon.style.backgroundRepeat = "no-repeat";
            search_icon.style.marginTop = "5px";
            search_icon_focus.style.visibility = "visible";
            search_icon_focus.src = "./assets/icon-search-mod-noc.svg";
            search_icon_focus.style.display = "none";
            
        }else {
            search_icon.style.background = 'url("./assets/close.svg")';
            search_icon.style.backgroundRepeat = "no-repeat";
            search_icon.style.marginTop = "5px";
            search_icon_focus.style.visibility = "visible";
            search_icon_focus.style.display = "none"; 
        }
        
    }
    
    
    
}

function notChangeIcon () {
    if(dark) {
        search_icon.style.background = 'url("./assets/icon-search-mod-noc.svg")';
        search_icon.style.marginTop = "0";
        search_icon_focus.src = "./assets/icon-search.svg";
        search_icon_focus.style.visibility = "hidden";  
    }
    else {
        search_icon.style.background = 'url("./assets/icon-search.svg")';
        search_icon.style.marginTop = "0";
        search_icon.style.backgroundRepeat = "no-repeat";
        search_icon_focus.style.visibility = "hidden";  
    } 
}

function buttonHover0 () {
    if(!ventana_activa_crear_gifo){
        if(dark) {
            navbar_button.style.background = 'url("./assets/CTA-crear-gifo-hover-modo-noc.svg")'; 
        }
        else {        
            navbar_button.style.background = 'url("./assets/CTA-crear-gifo-hover.svg")';
        } 
    }    
}

function buttonNoHover0 () {
    if(!ventana_activa_crear_gifo){
        if(dark) {
            navbar_button.style.background = 'url("./assets/CTA-crear-gifo-modo-noc.svg")'; 
        }
        else {         
            navbar_button.style.background = 'url("./assets/button-crear-gifo.svg")';
        } 
    }    
}

function buttonHoverL () {
    if(dark) {
        button_noc_left.style.background = 'url("./assets/button-slider-left-hover-noc.svg")';  
    }
    else {        
        button_noc_left.style.background = 'url("./assets/button-slider-left-hover.svg")';
    } 
}

function buttonNoHoverL () {
    if(dark) {
        button_noc_left.style.background = 'url("./assets/button-slider-left-md-noct.svg")';
    }
    else {         
        button_noc_left.style.background = 'url("./assets/button-slider-left.svg")';
    } 
}

function buttonHoverR () {
    if(dark) {
        button_noc_right.style.background = 'url("./assets/Button-Slider-right-hover-noc.svg")';  
    }
    else {        
        button_noc_right.style.background = 'url("./assets/Button-Slider-right-hover.svg")';
    } 
}

function buttonNoHoverR () {
    if(dark) {
        button_noc_right.style.background = 'url("./assets/button-slider-right-md-noct.svg")';
    }
    else {         
        button_noc_right.style.background = 'url("./assets/Button-Slider-right.svg")';
    } 
}

function buttonHover1 () {
    if(dark) {
        gifmax_left.style.background = 'url("./assets/button-slider-left-hover-noc.svg")';  
    }
    else {        
        gifmax_left.style.background = 'url("./assets/button-slider-left-hover.svg")';
    } 
}

function buttonNoHover1 () {
    if(dark) {
        gifmax_left.style.background = 'url("./assets/button-slider-left-md-noct.svg")';
    }
    else {         
        gifmax_left.style.background = 'url("./assets/button-slider-left.svg")';
    } 
}

function buttonHover2 () {
    if(dark) {
        gifmax_right.style.background = 'url("./assets/Button-Slider-right-hover-noc.svg")';  
    }
    else {        
        gifmax_right.style.background = 'url("./assets/Button-Slider-right-hover.svg")';
    } 
}

function buttonNoHover2 () {
    if(dark) {
        gifmax_right.style.background = 'url("./assets/button-slider-right-md-noct.svg")';
    }
    else {         
        gifmax_right.style.background = 'url("./assets/Button-Slider-right.svg")';
    } 
}

function buttonHover3 (e) {
    if(!mobile){
        if(dark) {
            results_gifos_vermas.style.background = 'url("./assets/CTA-ver+hover-modo-noc.svg")';
            favoritos_vermas.style.background = 'url("./assets/CTA-ver+hover-modo-noc.svg")';
            mis_gifos_vermas.style.background = 'url("./assets/CTA-ver+hover-modo-noc.svg")';  
        }
        else {        
            results_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas-hover.svg")';
            favoritos_vermas.style.background = 'url("./assets/CTA-ver-mas-hover.svg")';
            mis_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas-hover.svg")';

        }  
    } else {
        if(dark) {
            e.preventDefault(); 
        }
        else {        
            e.preventDefault();
        } 
    }
           
}

function buttonNoHover3 () {
    if(dark) {
        results_gifos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';
        favoritos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';
        mis_gifos_vermas.style.background = 'url("./assets/CTA-ver+-modo-noc.svg")';   
    }
    else {         
        results_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
        favoritos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
        mis_gifos_vermas.style.background = 'url("./assets/CTA-ver-mas.svg")';
    } 
}

function buttonHover4 () {
    if(dark) {
        crear_gifo_comenzar.style.background = blanco;
        crear_gifo_comenzar.style.borderColor = blanco;
        crear_gifo_comenzar.style.color = negro;
        crear_gifo_grabar.style.background = blanco;
        crear_gifo_grabar.style.borderColor = blanco;
        crear_gifo_grabar.style.color = negro;
        crear_gifo_finalizar.style.background = blanco;
        crear_gifo_finalizar.style.borderColor = blanco;
        crear_gifo_finalizar.style.color = negro;
        crear_gifo_subir.style.background = blanco;
        crear_gifo_subir.style.borderColor = blanco;
        crear_gifo_subir.style.color = negro;   
    }
    else {        
        crear_gifo_comenzar.style.background = lila;
        crear_gifo_comenzar.style.color = blanco;
        crear_gifo_grabar.style.background = lila;
        crear_gifo_grabar.style.color = blanco; 
        crear_gifo_finalizar.style.background = lila;
        crear_gifo_finalizar.style.color = blanco; 
        crear_gifo_subir.style.background = lila;
        crear_gifo_subir.style.color = blanco;   
    } 
}

function buttonNoHover4 () {
    if(dark) {
        crear_gifo_comenzar.style.background = "none";
        crear_gifo_comenzar.style.borderColor = blanco;
        crear_gifo_comenzar.style.color = blanco;
        crear_gifo_grabar.style.background = "none";
        crear_gifo_grabar.style.borderColor = blanco;
        crear_gifo_grabar.style.color = blanco; 
        crear_gifo_finalizar.style.background = "none";
        crear_gifo_finalizar.style.borderColor = blanco;
        crear_gifo_finalizar.style.color = blanco; 
        crear_gifo_subir.style.background = "none";
        crear_gifo_subir.style.borderColor = blanco;
        crear_gifo_subir.style.color = blanco;  
    }
    else {         
        crear_gifo_comenzar.style.background = blanco;
        crear_gifo_comenzar.style.borderColor = lila;
        crear_gifo_comenzar.style.color = lila;
        crear_gifo_grabar.style.background = blanco;
        crear_gifo_grabar.style.borderColor = lila;
        crear_gifo_grabar.style.color = lila; 
        crear_gifo_finalizar.style.background = blanco;
        crear_gifo_finalizar.style.borderColor = lila;
        crear_gifo_finalizar.style.color = lila; 
        crear_gifo_subir.style.background = blanco;
        crear_gifo_subir.style.borderColor = lila;
        crear_gifo_subir.style.color = lila;   
    } 
}


function menu_modo_noc () {
    if(mobile){
        if((dark_on_load==="true")) {
            list.style.background = negro;
            list.style.opacity = "1";
            console.log(x && localStorage["dark_on_load"]);
            body.style.overflow = "hidden";
        } else {
            list.style.background = lila;
            list.style.opacity = "0.9";
        }
    } else {
        list.style.background = "none";
        body.style.overflow = "visible";
    }
}

