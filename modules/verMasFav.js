import { api_key, url_fav, url_fav_active} from "./input.js";
import { results_gifos_vermas } from "./darkmode.js";
import { favoritos_container, navbar_favoritos } from './routes.js';

const ver_mas_favoritos = document.getElementById("favoritos-vermas");


ver_mas_favoritos.addEventListener("click", verMasFavoritos);
navbar_favoritos.addEventListener("click", modify_limit);

let limit_i = 12;
let limite = 25;
let offset = 13;

function modify_limit () {
    limit_i = 12;
    limite = 25;
    offset = 13;
}



async function verMasFavoritos (e)
{
    let stringId = localStorage.getItem("favoritos").split(',');
    console.log(stringId.length);
    const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${stringId}`);
    const json = await req.json();
    let json_size = json.data.length;

    if(json_size > limit_i)
    {
        if(json_size >= limite)
        {
            let string_id = stringId.slice(offset, limite);
            const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${string_id}`);
            const json = await req.json();
            for(let i = 0; i < json.data.length; i++)
            {
                favoritos_container.innerHTML += `
                <div class="results-gifos-box" id="${i}">
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
                arr.splice(arr_index, 1);                               
                localStorage.setItem('favoritos', arr.toString());
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
            offset += string_id.length;
            limite += string_id.length;
            limit_i += string_id.length;
        }
        else
        {
            let string_id = stringId.slice(offset, limite);
            const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${string_id}`);
            const json = await req.json();
            for(let i = 0; i < json.data.length; i++)
            {
                favoritos_container.innerHTML += `
                <div class="results-gifos-box" id="${i}">
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
            limit_i += string_id.length;
            limite -= 1;
        }
        const req = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${stringId}`);
        const json = await req.json();
        let json_size2 = json.data.length;
        if(json_size2 <= limit_i)
        {
            ver_mas_favoritos.style.display = "none";
        }
    }    
    else
    {
        e.preventDefault();
        ver_mas_favoritos.style.display = "none";
    }


    
}