import { api_key, url_fav, url_fav_active } from './input.js';
import { nav_bar_burger, mobile, list, nav_bar_cancel } from './darkmode.js';

const body = document.body;
export const navbar_favoritos = document.getElementById("navbar-favoritos");
export const navbar_mis_gifos = document.getElementById("navbar-mis-gifos");
export const navbar_button_crear = document.getElementById("nav-bar-button");
export let ventana_activa_mis_gifos = false;
export let ventana_activa_fav = false;
export let ventana_activa_crear_gifo = false;
const ver_mas_favoritos = document.getElementById("favoritos-vermas");

const header = document.getElementById("header");
export const search_container = document.getElementById("search-container");
const treding_text = document.getElementById("trending-text");
const favoritos = document.getElementById("favoritos");
const favoritos_sin_contenido = document.getElementById("favoritos-sin-contenido");
const mis_gifos = document.getElementById("mis-gifos");
const mis_gifos_sin_contenido = document.getElementById("mis-gifos-sin-contenido");
const crear_gifo_1 = document.getElementById("crear-gifo-1");
const results_gifos = document.getElementById("results-gifos");
export const sin_resultados_gifos = document.getElementById("sin-resultados-gifos");
const trending_gifos = document.getElementById("trending-gifos");
export const gifmax = document.getElementById("gifmax");
const gifmax_close = document.getElementById("gifmax-close");
export const favoritos_container = document.getElementById("favoritos-container");
export const mis_gifos_container = document.getElementById("mis-gifos-container");
export const img_gifmax = document.getElementById("img-gifmax");
const gifos_logo = document.getElementById("logo-modo-noc");

gifos_logo.addEventListener("click", changeValues);
navbar_favoritos.addEventListener("click", ventana_favoritos);
navbar_mis_gifos.addEventListener("click", ventana_mis_gifos);
navbar_button_crear.addEventListener("click", ventana_crear_gifo);
gifmax_close.addEventListener("click", gifmax_none);

window.addEventListener('load', changeValues);

function gifmax_none () {
    gifmax.style.display = "none";
    document.body.style.overflow = "visible";
    img_gifmax.src = "";
}
function changeValues () {
    windowState(false, false, false);
}
function windowState (value_1, value_2, value_3)
{
    localStorage.setItem("fav_window", value_1);
    localStorage.setItem("mg_window", value_2);
    localStorage.setItem("cg_window", value_3);
}

 
export function ventana_favoritos() {
    checkMenu();
    ver_mas_favoritos.style.display = "block";
    localStorage.setItem('gifmax_favoritos', 'false');
    let stringId = localStorage.getItem("favoritos").split(',');
    let fav_count = 12;

    if (stringId.length > 1){
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
            if(json.data.length > 12){
                fav_count = 12;
            }
            else{
                fav_count = json.data.length;
            }
            favoritos_container.innerHTML = "";
            for(let i = 0; i < fav_count; i++){
                
                favoritos_container.innerHTML += `
                <div class="results-gifos-box" id="${i}"
                onclick="
                if(${mobile}){
                    localStorage.setItem('gifmax_favoritos', 'true');               
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.childNodes[1].src;
                                img_gifmax.dataset.id = '${json.data[i].id}';
                                img_gifmax.dataset.number = '${i}';                              
                                user_gifmax.innerHTML = '${json.data[i].username}';
                                title_gifmax.innerHTML = '${json.data[i].title}';
                                if (localStorage.getItem('favoritos').split(',').includes('${json.data[i].id}')) {
                                    
                                    button1_gifmax.style.background = '${url_fav_active}';
                                    button1_gifmax.style.backgroundRepeat = 'no-repeat';
                                    button1_gifmax.style.backgroundSize = 'contain';
                                    button1_gifmax.style.backgroundColor = 'white';
                                    button1_gifmax.style.borderRadius = '5px';    
                                }
                                else {                                    
                                    button1_gifmax.style.background = '${url_fav}';
                                }
                }
                ">
                        <img src="${json.data[i].images.downsized.url}" alt="Gifs favoritos" id="${json.data[i].id}">
                        <div class="wrapper"></div>
                        <div class="gifos-box-buttons display">
                            <div class="gifos-box-button1 replace_card"
                            style="
                            background:${url_fav_active};
                            background-repeat: no-repeat;
                            background-size: contain;
                            "
                            onclick=
                            "
                            localStorage.setItem('favoritos', localStorage.getItem('favoritos'));

                            let arr = localStorage.getItem('favoritos').split(',');
                            let arr_index = arr.indexOf(this.parentNode.parentNode.childNodes[1].id)
                            arr.splice(arr_index, 1);                               localStorage.setItem('favoritos', arr.toString());
                            
                            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

                            "></div>                            
                            <div class="gifos-box-button2" 
                            onclick=
                                "
                                window.open('${json.data[i].images.downsized.url}', '_blank');
                                "></div>
                            <div class="gifos-box-button3" 
                            onclick= 
                                "
                                localStorage.setItem('gifmax_favoritos', 'true');               
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.parentNode.parentNode.childNodes[1].src;
                                img_gifmax.dataset.id = '${json.data[i].id}';
                                img_gifmax.dataset.number = '${i}';                              
                                user_gifmax.innerHTML = '${json.data[i].username}';
                                title_gifmax.innerHTML = '${json.data[i].title}';
                                if (localStorage.getItem('favoritos').split(',').includes('${json.data[i].id}')) {
                                    
                                    button1_gifmax.style.background = '${url_fav_active}';
                                    button1_gifmax.style.backgroundRepeat = 'no-repeat';
                                    button1_gifmax.style.backgroundSize = 'contain';
                                    button1_gifmax.style.backgroundColor = 'white';
                                    button1_gifmax.style.borderRadius = '5px';    
                                }
                                else {                                    
                                    button1_gifmax.style.background = '${url_fav}';
                                }                                
                                "></div>
                        </div>
                        <div class="gifos-box-text display">
                            <p class="user">${json.data[i].username}</p>
                            <p class="title">${json.data[i].title}</p>
                        </div>
                </div>
                `;
                

            }
            const replace_card = document.getElementsByClassName("replace_card");
            for (let i = 0; i < fav_count; i++) {
                replace_card[i].addEventListener("click", () => 
                {
                    if(json.data.length > 12)
                    {
                        ventana_favoritos();
                    }                    
                })  
            }        
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
        navbar_button_crear.style.background = 'url("./assets/CTA-crear-gifo-modo-noc.svg")';
    } else {
        if(mobile){
            navbar_mis_gifos.style.color = "#FFFFFF";
        }else{
            navbar_mis_gifos.style.color = "#572EE5";
        }
        navbar_button_crear.style.background = 'url("./assets/button-crear-gifo.svg")';
    }
    windowState(true, false, false);
    ventana_activa_fav = true;
    ventana_activa_mis_gifos = false;
    ventana_activa_crear_gifo = false;
};

export function ventana_mis_gifos () {
    checkMenu();
    localStorage.setItem('gifmax_misgifos', 'false');
    let stringId = localStorage.getItem("myGifs").split(',');
    let fav_count = 12;
    if (stringId.length > 1){
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
        fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${stringId}`)
        .then(resp => resp.json())
        .then(json => {
            if(json.data.length > 12){
                fav_count = 12;
            }
            else{
                fav_count = json.data.length;
            }
            mis_gifos_container.innerHTML = "";
            for(let i = 0; i < fav_count; i++){
                
                mis_gifos_container.innerHTML += `
                <div class="results-gifos-box" id="${i}"
                onclick=
                "
                if(${mobile}){
                    localStorage.setItem('gifmax_misgifos', 'true');               
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.childNodes[1].src;
                                img_gifmax.dataset.id = '${json.data[i].id}';
                                img_gifmax.dataset.number = '${i}';                              
                                user_gifmax.innerHTML = '${json.data[i].username}';
                                title_gifmax.innerHTML = '${json.data[i].title}';
                                if (localStorage.getItem('favoritos').split(',').includes('${json.data[i].id}')) {
                                    
                                    button1_gifmax.style.background = '${url_fav_active}';
                                    button1_gifmax.style.backgroundRepeat = 'no-repeat';
                                    button1_gifmax.style.backgroundSize = 'contain';
                                    button1_gifmax.style.backgroundColor = 'white';
                                    button1_gifmax.style.borderRadius = '5px';    
                                }
                                else {                                    
                                    button1_gifmax.style.background = '${url_fav}';
                                }
                }
                ">
                        <img src="${json.data[i].images.downsized.url}" alt="Gifs favoritos" id="${json.data[i].id}">
                        <div class="wrapper"></div>
                        <div class="gifos-box-buttons display">
                            <div class="gifos-box-button1 button1-misgifos replace_card"
                            onclick=
                            "
                            localStorage.setItem('favoritos', localStorage.getItem('favoritos'));

                            let arr = localStorage.getItem('myGifs').split(',');
                            let arr_index = arr.indexOf(this.parentNode.parentNode.childNodes[1].id)
                            arr.splice(arr_index, 1);                               localStorage.setItem('myGifs', arr.toString());
                            
                            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

                            "></div>                            
                            <div class="gifos-box-button2" 
                            onclick=
                                "
                                window.open('${json.data[i].images.downsized.url}', '_blank');
                                "></div>
                            <div class="gifos-box-button3" 
                            onclick= 
                                "
                                localStorage.setItem('gifmax_misgifos', 'true');               
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.parentNode.parentNode.childNodes[1].src;
                                img_gifmax.dataset.id = '${json.data[i].id}';
                                img_gifmax.dataset.number = '${i}';                              
                                user_gifmax.innerHTML = '${json.data[i].username}';
                                title_gifmax.innerHTML = '${json.data[i].title}';
                                if (localStorage.getItem('favoritos').split(',').includes('${json.data[i].id}')) {
                                    
                                    button1_gifmax.style.background = '${url_fav_active}';
                                    button1_gifmax.style.backgroundRepeat = 'no-repeat';
                                    button1_gifmax.style.backgroundSize = 'contain';
                                    button1_gifmax.style.backgroundColor = 'white';
                                    button1_gifmax.style.borderRadius = '5px';    
                                }
                                else {                                    
                                    button1_gifmax.style.background = '${url_fav}';
                                }                                
                                "></div>
                        </div>
                        <div class="gifos-box-text display">
                            <p class="user">${json.data[i].username}</p>
                            <p class="title">${json.data[i].title}</p>
                        </div>
                </div>
                `;
                

            }
            const replace_card = document.getElementsByClassName("replace_card");
            for (let i = 0; i < fav_count; i++) {
                replace_card[i].addEventListener("click", () => 
                {
                    if(json.data.length > 12)
                    {
                        ventana_mis_gifos();
                    }                    
                })  
            }       
        });   
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
        navbar_button_crear.style.background = 'url("./assets/CTA-crear-gifo-modo-noc.svg")';
    } else {
        if(mobile){
            navbar_favoritos.style.color = "#FFFFFF";
        }else{
            navbar_favoritos.style.color = "#572EE5";
        }
        navbar_button_crear.style.background = 'url("./assets/button-crear-gifo.svg")';
    }
    windowState(false, true, false);
    
    ventana_activa_fav = false;
    ventana_activa_mis_gifos = true;
    ventana_activa_crear_gifo = false;
};

export function ventana_crear_gifo () {
    checkMenu();
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

    navbar_button_crear.style.background = 'url("./assets/CTA-crear-gifo-active.svg")';

    if (localStorage["dark_on_load"] === "true") {
        navbar_mis_gifos.style.color = "#FFFFFF";
        navbar_favoritos.style.color = "#FFFFFF";
    } else {
        navbar_mis_gifos.style.color = "#572EE5";
        navbar_favoritos.style.color = "#572EE5";
    }
    windowState(false, false, true);
    ventana_activa_fav = false;
    ventana_activa_mis_gifos = false;
    ventana_activa_crear_gifo = true;
}

function checkMenu () {
    if(mobile){
        body.style.overflow = "visible";
        list.style.display = "none";
        nav_bar_cancel.style.display = "none";
        nav_bar_burger.style.display = "block";
        localStorage.setItem("menuOpen", false);
    }
}
