import { results_gifos_vermas } from "./darkmode.js";
import { search_input , api_key, results_gifos_container, url_fav, url_fav_active} from "./input.js";




results_gifos_vermas.addEventListener("click", ver_mas_resultados);

search_input.addEventListener("keydown", modify_limit);

let limit_i = 12;
let limit_f = 13;
let offset = 12;

function modify_limit () {
    limit_i = 12;
    limit_f = 13;
    offset = 12;
}



async function ver_mas_resultados (e)
{
    const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=${limit_f}&offset=0&rating=g&lang=en`);
    const resp = await req.json();
    const resp_size = resp.data.length;
    
    if(resp_size > limit_i) {

        

        const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=12&offset=${offset}&rating=g&lang=en`);
        const json = await request.json();
        const response_size = json.data.length;

        for (let i = 0; i < response_size; i++) 
        {
            
            results_gifos_container.innerHTML += `
            <div class="results-gifos-box" id="${json.data[i].id}">
                    <img src="${json.data[i].images.downsized.url}" alt="Gif" id="${json.data[i].id}">
                    <div class="wrapper"></div>
                    <div class="gifos-box-buttons display">
                        <div class="gifos-box-button1 ad-fav" 
                        onclick=
                        "
                        localStorage.setItem('favoritos', localStorage.getItem('favoritos'));

                        if (!localStorage.getItem('favoritos').split(',').includes(this.parentNode.parentNode.childNodes[1].id)) 
                        {
                            localStorage.setItem('favoritos', localStorage.getItem('favoritos') + ',' + this.parentNode.parentNode.childNodes[1].id);
                            this.style.background = '${url_fav_active}';
                            this.style.backgroundRepeat = 'no-repeat';
                            this.style.backgroundSize = 'contain';
                            this.style.backgroundColor = 'white';
                            this.style.borderRadius = '5px';

                        }
                        else 
                        {
                            
                            let arr = localStorage.getItem('favoritos').split(',');
                            let arr_index = arr.indexOf(this.parentNode.parentNode.childNodes[1].id);
                            arr.splice(arr_index, 1);
                            localStorage.setItem('favoritos', arr.toString());
                            this.style.background =  '${url_fav}';
                        }                            
                        
                        
                        "></div>                            
                        <div class="gifos-box-button2"
                        onclick=
                                "
                                window.open('${json.data[i].images.downsized.url}', '_blank');
                                "></div>
                        <div class="gifos-box-button3" 
                        onclick= 
                                "
                                
                                const gifmax = document.getElementById('gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmax.style.display = 'block';
                                const img_gifmax = document.getElementById('img-gifmax');
                                img_gifmax.src = this.parentNode.parentNode.childNodes[1].src;
                                img_gifmax.dataset.id = '${json.data[i].id}'; 
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
                    </div></div>`;
            let button1 = document.getElementsByClassName("ad-fav");

            if (localStorage.getItem('favoritos').split(',').includes(json.data[i].id)) {
                button1[i].style.background = "url('../assets/icon-fav-active2.svg')";
            } else {
                button1[i].style.background = "url('../assets/icon-fav.svg')";
            }
            
        }
        
        if(response_size == 0){
            limit_f -= 1;

        } else {
            limit_i = limit_i + response_size;
            limit_f = limit_f + response_size;
            offset = offset + response_size;
        }
        
    } else {
        e.preventDefault();
    }
}