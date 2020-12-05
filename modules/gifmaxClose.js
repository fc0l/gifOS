import {results_gifos, url_fav_active, url_fav} from "./input.js";
import { ventana_favoritos } from './routes.js';


const gifmax_close = document.getElementById("gifmax-close");
const button_fav = document.getElementsByClassName("ad-fav");
const gifos_box = document.getElementsByClassName("gifos-box");


gifmax_close.addEventListener("click", gifmax_cerrar);
function gifmax_cerrar() 
{
    
    let array_gifos = Array.from(results_gifos.childNodes[5].childNodes);
    let gifos_filter = array_gifos.filter((gifos) => {return gifos.nodeName.includes("DIV")});
    
    
    for(let i = 0; i < gifos_box.length; i++)
    {
        
        if(localStorage.getItem("favoritos").split(',').includes(gifos_box[i].childNodes[1].id))
        {
            button_fav[i].style.background = `${url_fav_active}`;
            button_fav[i].style.backgroundRepeat = 'no-repeat';
            button_fav[i].style.backgroundSize = 'contain';
            button_fav[i].style.backgroundColor = 'white';
            button_fav[i].style.borderRadius = '5px';
        }
        else 
        {
             button_fav[i].style.background =  `${url_fav}`;
        }
    }
    for(let i = 0; i < gifos_filter.length; i++)
    {
        
        if(localStorage.getItem("favoritos").split(',').includes(gifos_filter[i].id))
        {
            button_fav[i].style.background = `${url_fav_active}`;
            button_fav[i].style.backgroundRepeat = 'no-repeat';
            button_fav[i].style.backgroundSize = 'contain';
            button_fav[i].style.backgroundColor = 'white';
            button_fav[i].style.borderRadius = '5px';
        }
        else 
        {
             button_fav[i].style.background =  `${url_fav}`;
        }
    }
    
    if(localStorage.getItem("gifmax_trend") == "true")
    {
        localStorage.setItem('gifmax_trend', 'false');
    }
    if(localStorage.getItem("gifmax_results") == "true")
    {
        localStorage.setItem('gifmax_results', 'false');
    }
    // if(localStorage.getItem("gifmax_favoritos") == "true")
    // {
    //     localStorage.setItem('gifmax_favoritos', 'false');
    //     ventana_favoritos();
    // }
}

