import { api_key, url_fav, url_fav_active } from './input.js';
import { click_r, gifmax_right } from './sliderGifos.js';

export const trending_cont = document.getElementById("trending-gifos-container");
const button_r = document.getElementById("button-mod-noc2");
const button_l = document.getElementById("button-mod-noc");

window.addEventListener('load', update_gifos);
button_r.addEventListener("click", scroll_r);
button_l.addEventListener("click", scroll_l);

async function update_gifos () 
{
    localStorage.setItem('gifmax_trend', 'false');
    const req = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=10&offset=0`);
    const resp = await req.json();   
    for(let i = 0; i < resp.data.length; i++)
    {
        trending_cont.innerHTML += `
        <div class="gifos-box" id="trend-gifos">
            <img src="${resp.data[i].images.downsized.url}" alt="Gif" id=${resp.data[i].id}>
                <div class="wrapper"></div>
                <div class="gifos-box-buttons display">
                    <div class="gifos-box-button1 ad-fav"
                    onclick=
                    "
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
                            this.style.background = '${url_fav}';
                        }
                    "></div>
                    <a href="${resp.data[i].images.downsized.url}" download target="blank__"><div class="gifos-box-button2"></div></a>
                                <div class="gifos-box-button3"
                                onclick= 
                                "
                                localStorage.setItem('gifmax_trend', true);               
                                let id_img = '${resp.data[i].id}';
                                const gifmaxx = document.getElementById('gifmax');
                                const img_gifmax = document.getElementById('img-gifmax');
                                const user_gifmax = document.getElementById('gifmax-user');
                                const title_gifmax = document.getElementById('gifmax-title');
                                const button1_gifmax = document.getElementById('gifmax-button1');
                                gifmaxx.style.display = 'block';
                                img_gifmax.src = this.parentNode.parentNode.childNodes[1].src;
                                img_gifmax.dataset.id = '${resp.data[i].id}';
                                img_gifmax.dataset.number = '${i}';                              
                                user_gifmax.innerHTML = '${resp.data[i].username}';
                                title_gifmax.innerHTML = '${resp.data[i].title}';
                                if (localStorage.getItem('favoritos').split(',').includes('${resp.data[i].id}')) {
                                    
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
                    <p class="user ">${resp.data[i].username}</p>
                    <p class="title ">${resp.data[i].title}</p>
                </div>
        </div>`;
        const sad = Array.from(trending_cont.childNodes);
        const das = sad.filter((sa) => {return sa.nodeName.includes("DIV")});
        let fav_b = das[i].childNodes[5].childNodes[1];

        if(localStorage.getItem('favoritos').split(',').includes(das[i].childNodes[1].id))
        {
            fav_b.style.background = `${url_fav_active}`;
            fav_b.style.backgroundRepeat = 'no-repeat';
            fav_b.style.backgroundSize = 'contain';
            fav_b.style.backgroundColor = 'white';
            fav_b.style.borderRadius = '5px';
        }
        else
        {
            fav_b.style.background = '${url_fav}';
        }
    }
    
    
}

function scroll_r () 
{
    trending_cont.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
}
function scroll_l () 
{
    trending_cont.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
}