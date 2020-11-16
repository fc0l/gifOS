import { mobile, trending_text, results_gifos_h2, results_gifos_h2_w } from "./darkmode.js";
import { sin_resultados_gifos } from "./routes.js";

export const search_input = document.getElementById("search-input");
export const search_icon = document.getElementById("search-icon");
const results_gifos = document.getElementById("results-gifos");
const search_results = document.getElementById("search-results");
const results_gifos_container = document.getElementById("results-gifos-container");
const api_key = "2HgAvudoWdCgxf4i72FF9xf1m4N2VBib";

export function sugerencias_active (e)
{
    if(e.target.value) 
    {
        if (mobile)
        {
            search_results.style.display = "none";
            try 
            {
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${e.target.value}&limit=12&offset=0&rating=g&lang=en`)
                .then(resp => resp.json())
                .then(json => 
                    {                        
                        if(json.data.length > 0) 
                        {
                            sin_resultados_gifos.style.display = "none";
                            trending_text.style.display = "none";
                            results_gifos.style.display = "block";
                            results_gifos_container.innerHTML = ""; 
                            for(let i = 0; i < json.data.length; i++) 
                            {
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
                        else
                        {
                            results_gifos.style.display = "none";
                            trending_text.style.display = "block";
                            sin_resultados_gifos.style.display ="block";
                            results_gifos_h2_w.innerHTML = `${e.target.value}`;
                        }
                          
                    })
            } 
            catch (error) 
            {
                console.log(error);
            }
            
        }
        else
        {
            search_results.style.display = "block";
            try 
            {
                fetch(`https://api.giphy.com/v1/tags/related/${e.target.value}?api_key=${api_key}&limit=5`)
                .then(resp => resp.json())
                .then(json => 
                    {
                        console.log(json.data.length);
                        if(json.data.length > 0)
                        {
                            search_results.innerHTML = ""; 
                            for(let i = 0; i < json.data.length; i++)
                            {
                                search_results.innerHTML += `<p><img src="./assets/icon-search.svg" alt="icono de busqueda" class="search-icon-onfocus">${json.data[i].name}</p>`;
                            }
                        }
                    })
            } 
            catch (error) 
            {
                console.log(error);
            }
            try 
            {
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${e.target.value}&limit=12&offset=0&rating=g&lang=en`)
                .then(resp => resp.json())
                .then(json => 
                    {                        
                        if(json.data.length > 0) 
                        {
                            sin_resultados_gifos.style.display = "none";
                            trending_text.style.display = "none";
                            results_gifos.style.display = "block";
                            results_gifos_container.innerHTML = ""; 
                            for(let i = 0; i < json.data.length; i++) 
                            {
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
                        else
                        {
                            results_gifos.style.display = "none";
                            trending_text.style.display = "block";
                            sin_resultados_gifos.style.display ="block";
                            results_gifos_h2_w.innerHTML = `${e.target.value}`;
                        }
                          
                    })
            } 
            catch (error) 
            {
                console.log(error);
            }
        }
    }
    else 
    {
        results_gifos.style.display = "none";
        trending_text.style.display = "block";
        sin_resultados_gifos.style.display ="none";
        search_results.style.display = "none";
    }
}

export function limpiar_campo () {
    search_input.value = "";
    search_results.style.display = "none";
    results_gifos.style.display = "none";
    sin_resultados_gifos.style.display = "none";
    trending_text.style.display = "block";
}

export function limpiar_campo_sug () {
    search_results.style.display = "none";
}




// `<div class="results-gifos-box">
//                 <img src="${json.data[i].images.downsized.url}" alt="Gif">
//                 <div class="wrapper"></div>
//                 <div class="gifos-box-buttons display">
//                     <div class="gifos-box-button1"></div>
//                     <div class="gifos-box-button2"></div>
//                     <div class="gifos-box-button3"></div>
//                 </div>
//                 <div class="gifos-box-text display">
//                     <p class="user ">User</p>
//                     <p class="title ">Titulo</p>
//                 </div>
//         </div>`;

