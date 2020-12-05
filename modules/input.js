import { mobile, trending_text, results_gifos_h2, results_gifos_h2_w, results_gifos_vermas } from "./darkmode.js";
import { sin_resultados_gifos } from "./routes.js";
import { img_gifmax } from "./trendingText.js";


export const api_key = "2HgAvudoWdCgxf4i72FF9xf1m4N2VBib";
export const search_input = document.getElementById("search-input");
export const search_icon = document.getElementById("search-icon");
export const results_gifos = document.getElementById("results-gifos");
export const search_results = document.getElementById("search-results");
export const results_gifos_container = document.getElementById("results-gifos-container");
export const url_fav_active = "url(../assets/icon-fav-active2.svg)";
export const url_fav = "url(../assets/icon-fav.svg)";



window.addEventListener('click', limpiar_campo_sug);
search_input.addEventListener("keyup", sugerencias_active);
search_icon.addEventListener("click", limpiar_campo);

localStorage.setItem("favoritos", localStorage.getItem("favoritos"));



export function sugerencias_active(e) {
    results_gifos_vermas.style.display = "block";
    localStorage.setItem('gifmax_results', false);
    if (e.target.value) {
        if (mobile) {
            search_results.style.display = "none";
            // resultados con los gifos
            try {
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${e.target.value}&limit=12&offset=0&rating=g&lang=en`)
                    .then(resp => resp.json())
                    .then(json => {
                        if (json.data.length > 0) {
                            sin_resultados_gifos.style.display = "none";
                            trending_text.style.display = "none";
                            results_gifos.style.display = "block";
                            results_gifos_container.innerHTML = "";
                            for (let i = 0; i < json.data.length; i++) {
                                results_gifos_h2.innerHTML = `${e.target.value}`;
                                results_gifos_container.innerHTML += `<div class="results-gifos-box"><img src="${json.data[i].images.downsized.url}" alt="Gif"><div class="wrapper"></div><div class="gifos-box-buttons display">           <div class="gifos-box-button1"></div>
                                <div class="gifos-box-button2"></div>
                                <div class="gifos-box-button3"></div>
                            </div>
                            <div class="gifos-box-text display">
                                <p class="user ">User</p>
                                <p class="title ">Titulo</p>
                            </div></div>`;
                            }
                        }
                        else {
                            results_gifos.style.display = "none";
                            trending_text.style.display = "block";
                            sin_resultados_gifos.style.display = "block";
                            results_gifos_h2_w.innerHTML = `${e.target.value}`;
                        }
                    })
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            search_results.style.display = "block";
            // menu de sugerencias
            try {
                fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${e.target.value}&limit=5`)
                    .then(resp => resp.json())
                    .then(json => {
                        if (json.data.length > 0) {
                            search_results.innerHTML = "";
                            for (let i = 0; i < json.data.length; i++) {
                                search_results.innerHTML += `<p class="search-suggest"><img src="./assets/icon-search-mod-noc.svg" alt="icono de busqueda" class="search-icon-onfocus">${json.data[i].name}</p>`;



                                const search_icon_onfocus = document.getElementsByClassName("search-icon-onfocus");

                                if (localStorage['dark_on_load'] == 'true') {
                                    for (let i = 0; i < search_icon_onfocus.length; i++) {
                                        search_icon_onfocus[i].src = "./assets/icon-search-mod-noc.svg";
                                    }
                                } else {
                                    for (let i = 0; i < search_icon_onfocus.length; i++) {
                                        search_icon_onfocus[i].src = "./assets/icon-search.svg";
                                    }
                                }
                            }
                            const search_sugg = document.getElementsByClassName("search-suggest");
                            for (let i = 0; i < json.data.length; i++) {
                                search_sugg[i].addEventListener('click', clean_input);
                            }
                            function clean_input() {
                                search_input.value = this.textContent;
                                search_results.style.display = "none";
                                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.textContent}&limit=12&offset=0&rating=g&lang=en`)
                                    .then(resp => resp.json())
                                    .then(json => {
                                        if (json.data.length > 0) {

                                            sin_resultados_gifos.style.display = "none";
                                            trending_text.style.display = "none";
                                            results_gifos.style.display = "block";
                                            results_gifos_container.innerHTML = "";
                                            for (let i = 0; i < json.data.length; i++) {
                                                results_gifos_h2.innerHTML = this.textContent;
                                                results_gifos_container.innerHTML += `<div class="results-gifos-box"><img src="${json.data[i].images.downsized.url}" alt="Gif" id="${json.data[i].id}"><div class="wrapper"></div><div class="gifos-box-buttons display"><div class="gifos-box-button1 ad-fav" 
                                onclick=
                                "
                                localStorage.setItem('favoritos', localStorage.getItem('favoritos'));

                                if (!localStorage.getItem('favoritos').split(',').includes(this.parentNode.parentNode.childNodes[0].id)) 
                                {
                                    

                                    localStorage.setItem('favoritos', localStorage.getItem('favoritos') + ',' + this.parentNode.parentNode.childNodes[0].id);
                                    this.style.background = '${url_fav_active}';
                                    this.style.backgroundRepeat = 'no-repeat';
                                    this.style.backgroundSize = 'contain';
                                    this.style.backgroundColor = 'white';
                                    this.style.borderRadius = '5px';

                                }
                                else 
                                {
                                    
                                    let arr = localStorage.getItem('favoritos').split(',');
                                    let arr_index = arr.indexOf(this.parentNode.parentNode.childNodes[0].id);
                                    arr.splice(arr_index, 1);
                                    localStorage.setItem('favoritos', arr.toString());
                                    this.style.background = '${url_fav}';
                                }                            
                                ">
                                </div>
                                <div class="gifos-box-button2"></div>
                                <div class="gifos-box-button3" 
                                onclick= 
                                "
                                
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.parentNode.parentNode.childNodes[0].src;
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
                                <p class="user ">${json.data[i].username}</p>
                                <p class="title ">${json.data[i].title}</p>
                            </div>`;
                                                let button1 = document.getElementsByClassName("ad-fav");

                                                if (localStorage.getItem('favoritos').split(',').includes(json.data[i].id)) {

                                                    button1[i].style.background = "url('../assets/icon-fav-active2.svg')";


                                                } else {

                                                    button1[i].style.background = "url('../assets/icon-fav.svg')";
                                                }

                                            }

                                        }
                                        else {
                                            results_gifos.style.display = "none";
                                            trending_text.style.display = "block";
                                            sin_resultados_gifos.style.display = "block";
                                            results_gifos_h2_w.innerHTML = `${e.target.value}`;
                                        }

                                    })
                            }
                        }
                    })
            }
            catch (error) {
                console.log(error);
            }
            // resultados con los gifos
            try {
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${e.target.value}&limit=12&offset=0&rating=g&lang=en`)
                    .then(resp => resp.json())
                    .then(json => {
                        if (json.data.length > 0) {

                            sin_resultados_gifos.style.display = "none";
                            trending_text.style.display = "none";
                            results_gifos.style.display = "block";
                            results_gifos_container.innerHTML = "";
                            for (let i = 0; i < json.data.length; i++) {
                                results_gifos_h2.innerHTML = `${e.target.value}`;
                                results_gifos_container.innerHTML += `<div class="results-gifos-box" id="${json.data[i].id}"><img src="${json.data[i].images.downsized.url}" alt="Gif" id="${json.data[i].id}"><div class="wrapper"></div><div class="gifos-box-buttons display"><div class="gifos-box-button1 ad-fav" 
                                onclick=
                                "
                                localStorage.setItem('favoritos', localStorage.getItem('favoritos'));

                                if (!localStorage.getItem('favoritos').split(',').includes(this.parentNode.parentNode.childNodes[0].id)) 
                                {                                   

                                    localStorage.setItem('favoritos', localStorage.getItem('favoritos') + ',' + this.parentNode.parentNode.childNodes[0].id);
                                    this.style.background = '${url_fav_active}';
                                    this.style.backgroundRepeat = 'no-repeat';
                                    this.style.backgroundSize = 'contain';
                                    this.style.backgroundColor = 'white';
                                    this.style.borderRadius = '5px';

                                }
                                else 
                                {
                                    
                                    let arr = localStorage.getItem('favoritos').split(',');
                                    let arr_index = arr.indexOf(this.parentNode.parentNode.childNodes[0].id);
                                    arr.splice(arr_index, 1);
                                    localStorage.setItem('favoritos', arr.toString());
                                    this.style.background = '${url_fav}';
                                }                            
                                ">
                                </div>
                                <div class="gifos-box-button2"
                                onclick=
                                "
                                window.open('${json.data[i].images.downsized.url}', '_blank');
                                "
                                ></div>

                                <div class="gifos-box-button3" 
                                onclick= 
                                "
                                localStorage.setItem('gifmax_results', true);
                                let id_img = '${json.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.parentNode.parentNode.childNodes[0].src;
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
                                
                                
                                "
                                ></div>
                            </div>
                            <div class="gifos-box-text display">
                                <p class="user ">${json.data[i].username}</p>
                                <p class="title ">${json.data[i].title}</p>
                            </div></div>`;

                                let button1 = document.getElementsByClassName("ad-fav");
                                if (localStorage.getItem('favoritos').split(',').includes(json.data[i].id)) {
                                    button1[i].style.background = "url('../assets/icon-fav-active2.svg')";
                                }
                                else {
                                    button1[i].style.background = "url('../assets/icon-fav.svg')";
                                }


                            }
                        }
                        else {
                            results_gifos.style.display = "none";
                            trending_text.style.display = "block";
                            sin_resultados_gifos.style.display = "block";
                            results_gifos_h2_w.innerHTML = `${e.target.value}`;
                        }

                    })
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    else {
        results_gifos.style.display = "none";
        trending_text.style.display = "block";
        sin_resultados_gifos.style.display = "none";
        search_results.style.display = "none";
    }
    if (e.key == "Enter") {
        limpiar_campo_sug(e);
    }
}

export function limpiar_campo() {
    search_input.value = "";
    search_results.style.display = "none";
    results_gifos.style.display = "none";
    sin_resultados_gifos.style.display = "none";
    trending_text.style.display = "block";
}

export function limpiar_campo_sug(e) {
    if (!search_results.contains(e.target)) {
        search_results.style.display = "none";
    }
}

