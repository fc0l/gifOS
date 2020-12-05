import {results_gifos_container, search_input, api_key } from './input.js';
import { img_gifmax, favoritos_container} from './routes.js';
import { limit_i } from './verMas.js';
import { button_fav } from './gifmaxFav.js';
import { trending_cont } from './trendingGifos.js';

export const gifmax_right = document.getElementById("gifmax-right");
export const gifmax_left = document.getElementById("gifmax-left");
const user_gifmax = document.getElementById('gifmax-user');
const title_gifmax = document.getElementById('gifmax-title');

gifmax_right.addEventListener("click", click_r);
gifmax_left.addEventListener("click", click_l)

export async function click_r () 
{
    if(localStorage.getItem("gifmax_results") == "true")
    {
        let gifos_count = results_gifos_container.childNodes.length;
        let number_gifo = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let id_gifo = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;
        
        const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=${gifos_count}&offset=0&rating=g&lang=en`);
        const json = await req.json();
    
        if(id_gifo == json.data[number_gifo].id && number_gifo != (limit_i-1))
        {   
            img_gifmax.src = json.data[number_gifo+1].images.downsized.url;
            user_gifmax.innerHTML = json.data[number_gifo+1].username;
            title_gifmax.innerHTML = json.data[number_gifo+1].title;
            img_gifmax.dataset.number = number_gifo + 1;
            img_gifmax.dataset.id = json.data[number_gifo+1].id;            
        }
        else
        {
            img_gifmax.src = json.data[0].images.downsized.url;
            img_gifmax.dataset.number = 0;
            img_gifmax.dataset.id = json.data[0].id;
            user_gifmax.innerHTML = json.data[0].username;
            title_gifmax.innerHTML = json.data[0].title;
            
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
        }
    }
    if(localStorage.getItem("gifmax_trend") == "true")
    {
        let trending_array = Array.from(trending_cont.childNodes);
        let trending_filter = trending_array.filter((element) => 
        {return element.nodeName.includes("DIV")});
        let trending_elements = trending_filter.length;
        let trending_number = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let trending_id = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;

        const req = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=10&offset=0`);
        const json = await req.json();

        if(trending_id == json.data[trending_number].id && trending_number != (trending_elements-1))
        {   
            img_gifmax.src = json.data[trending_number+1].images.downsized.url;
            user_gifmax.innerHTML = json.data[trending_number+1].username;
            title_gifmax.innerHTML = json.data[trending_number+1].title;
            img_gifmax.dataset.number = trending_number + 1;
            img_gifmax.dataset.id = json.data[trending_number+1].id;            
        }
        else
        {
            img_gifmax.src = json.data[0].images.downsized.url;
            img_gifmax.dataset.number = 0;
            img_gifmax.dataset.id = json.data[0].id;
            user_gifmax.innerHTML = json.data[0].username;
            title_gifmax.innerHTML = json.data[0].title;
            
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
        }
    }
    if(localStorage.getItem("gifmax_favoritos") == "true")
    {
        let string_id = localStorage.getItem("favoritos").split(',');
        let favoritos_array = Array.from(favoritos_container.childNodes);        
        let favoritos_filter = favoritos_array.filter((element) => 
        {return element.nodeName.includes("DIV")});
        let favoritos_elements = favoritos_filter.length;
        let favoritos_number = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let favoritos_id = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;

        const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${string_id}`);
        const json = await req.json();

        if(favoritos_id == json.data[favoritos_number].id && favoritos_number != (favoritos_elements-1))
        {   
            img_gifmax.src = json.data[favoritos_number+1].images.downsized.url;
            user_gifmax.innerHTML = json.data[favoritos_number+1].username;
            title_gifmax.innerHTML = json.data[favoritos_number+1].title;
            img_gifmax.dataset.number = favoritos_number + 1;
            img_gifmax.dataset.id = json.data[favoritos_number+1].id;            
        }
        else
        {
            img_gifmax.src = json.data[0].images.downsized.url;
            img_gifmax.dataset.number = 0;
            img_gifmax.dataset.id = json.data[0].id;
            user_gifmax.innerHTML = json.data[0].username;
            title_gifmax.innerHTML = json.data[0].title;
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
    
        }
    }    
}
async function click_l () 
{
    if(localStorage.getItem("gifmax_results") == "true")
    {
        let gifos_count = results_gifos_container.childNodes.length;
        let number_gifo = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let id_gifo = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;
        
        const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=${gifos_count}&offset=0&rating=g&lang=en`);
        const json = await req.json();
    
        if(id_gifo == json.data[number_gifo].id && number_gifo != (0))
        {   
            img_gifmax.src = json.data[number_gifo-1].images.downsized.url;
            user_gifmax.innerHTML = json.data[number_gifo - 1].username;
            title_gifmax.innerHTML = json.data[number_gifo - 1].title;
            img_gifmax.dataset.number = number_gifo - 1;
            img_gifmax.dataset.id = json.data[number_gifo - 1].id;            
        }
        else
        {
            img_gifmax.src = json.data[limit_i-1].images.downsized.url;
            img_gifmax.dataset.number = limit_i-1;
            img_gifmax.dataset.id = json.data[limit_i-1].id;
            user_gifmax.innerHTML = json.data[limit_i-1].username;
            title_gifmax.innerHTML = json.data[limit_i-1].title;            
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
        }
    }
    if(localStorage.getItem("gifmax_trend") == "true")
    {
        let trending_array = Array.from(trending_cont.childNodes);
        let trending_filter = trending_array.filter((element) => 
        {return element.nodeName.includes("DIV")});
        let trending_elements = trending_filter.length;
        let trending_number = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let trending_id = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;

        const req = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=10&offset=0`);
        const json = await req.json();

        if(trending_id == json.data[trending_number].id && trending_number != (0))
        {
            img_gifmax.src = json.data[trending_number-1].images.downsized.url;
            user_gifmax.innerHTML = json.data[trending_number - 1].username;
            title_gifmax.innerHTML = json.data[trending_number - 1].title;
            img_gifmax.dataset.number = trending_number - 1;
            img_gifmax.dataset.id = json.data[trending_number - 1].id;           
        }
        else
        {
            img_gifmax.src = json.data[trending_elements-1].images.downsized.url;
            img_gifmax.dataset.number = trending_elements-1;
            img_gifmax.dataset.id = json.data[trending_elements-1].id;
            user_gifmax.innerHTML = json.data[trending_elements-1].username;
            title_gifmax.innerHTML = json.data[trending_elements-1].title;            
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
        }
    }
    if(localStorage.getItem("gifmax_favoritos") == "true")
    {
        let string_id = localStorage.getItem("favoritos").split(',');
        let favoritos_array = Array.from(favoritos_container.childNodes);        
        let favoritos_filter = favoritos_array.filter((element) => 
        {return element.nodeName.includes("DIV")});
        let favoritos_elements = favoritos_filter.length;
        let favoritos_number = Number(this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.number);
        let favoritos_id = this.parentNode.childNodes[5].childNodes[1].childNodes[1].dataset.id;

        const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${string_id}`);
        const json = await req.json();

        if(favoritos_id == json.data[favoritos_number].id && favoritos_number != (0))
        {
            img_gifmax.src = json.data[favoritos_number-1].images.downsized.url;
            user_gifmax.innerHTML = json.data[favoritos_number - 1].username;
            title_gifmax.innerHTML = json.data[favoritos_number - 1].title;
            img_gifmax.dataset.number = favoritos_number - 1;
            img_gifmax.dataset.id = json.data[favoritos_number - 1].id;           
        }
        else
        {
            img_gifmax.src = json.data[favoritos_elements-1].images.downsized.url;
            img_gifmax.dataset.number = favoritos_elements-1;
            img_gifmax.dataset.id = json.data[favoritos_elements-1].id;
            user_gifmax.innerHTML = json.data[favoritos_elements-1].username;
            title_gifmax.innerHTML = json.data[favoritos_elements-1].title;            
        }
        if (localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
        {
            button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
            button_fav.style.backgroundRepeat = 'no-repeat';
            button_fav.style.backgroundSize = 'contain';
            button_fav.style.backgroundColor = 'white';
            button_fav.style.borderRadius = '5px';
        }
        else 
        {
            button_fav.style.background = "url('../assets/icon-fav.svg')";
        }
    }    
}