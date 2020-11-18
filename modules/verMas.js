import { results_gifos_vermas } from "./darkmode.js";
import { search_input , api_key, results_gifos_container } from "./input.js";


results_gifos_vermas.addEventListener("click", ver_mas_resultados);

async function ver_mas_resultados ()
{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=13&offset=0&rating=g&lang=en`);
    const json = await response.json();
    const div_count = results_gifos_container.childElementCount;
    if ((json.data.length > 12) && (div_count == 12))
    {
        const responseM = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_input.value}&limit=12&offset=12&rating=g&lang=en`);
        const jsonM = await responseM.json();
        for (let i = 0; i < jsonM.data.length; i++) 
        { 
            results_gifos_container.innerHTML += `<div class="results-gifos-box"><img src="${jsonM.data[i].images.downsized.url}" alt="Gif"><div class="wrapper"></div><div class="gifos-box-buttons display">           <div class="gifos-box-button1"></div>
                                <div class="gifos-box-button2"></div>
                                <div class="gifos-box-button3"></div>
                            </div>
                            <div class="gifos-box-text display">
                                <p class="user ">User</p>
                                <p class="title ">Titulo</p>
                            </div></div>`;
        }
    }
}