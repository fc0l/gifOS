import { trending_text, trending_text_a, results_gifos_h2, results_gifos_vermas } from "./darkmode.js";
import { search_input, search_results, api_key, results_gifos, results_gifos_container, url_fav, url_fav_active} from './input.js';
import { sin_resultados_gifos } from './routes.js';
import { click_r, gifmax_right } from './sliderGifos.js';

export const img_gifmax = document.getElementById("img-gifmax");




window.addEventListener('load', trending_updates);


async function trending_updates () 
{
    try 
    {
        const response = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${api_key}`);
        const json = await response.json();

        const json_n = 6;



        for (let i = 0; i < json_n; i++) 
        {
            trending_text_a.innerHTML += `<a class="a-trending-text"> ${json.data[i]} </a>`;
        }

        const a_trending_text = document.getElementsByClassName("a-trending-text");
        for (let i = 0; i < json_n; i++) 
        {
            a_trending_text[i].addEventListener('click', value_complete);
        }
        function value_complete() 
        {
            search_input.value = this.textContent;
            search_results.style.display = "none";
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.textContent}&limit=12&offset=0&rating=g&lang=en`)
                .then(resp => resp.json())
                .then(json => {
                    if (json.data.length > 0) {
                        results_gifos_vermas.style.display = "block";
                        sin_resultados_gifos.style.display = "none";
                        trending_text.style.display = "none";
                        results_gifos.style.display = "block";
                        results_gifos_container.innerHTML = "";
                        for (let i = 0; i < json.data.length; i++) {
                            results_gifos_h2.innerHTML = this.textContent;
                            results_gifos_container.innerHTML += `<div class="results-gifos-box" id="${json.data[i].id}" data-number= "${i}"><img src="${json.data[i].images.downsized.url}" alt="Gif" id="${json.data[i].id}"><div class="wrapper"></div><div class="gifos-box-buttons display"><div class="gifos-box-button1 ad-fav" 
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
                                "></div>
                                
                                <div class="gifos-box-button3" 
                                onclick= 
                                "
                                localStorage.setItem('gifmax_results', true);
                                const gifmax = document.getElementById('gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmax.style.display = 'block';
                                const img_gifmax = document.getElementById('img-gifmax');
                                img_gifmax.src = this.parentNode.parentNode.childNodes[0].src;
                                img_gifmax.dataset.number = '${i}';
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

    catch 
    {
        trending_text_a.innerHTML += "<p>Error connection</p>";
    }
    
    
    
    
}


