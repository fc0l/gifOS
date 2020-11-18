import { trending_text, trending_text_a } from "./darkmode.js";

window.addEventListener('load', trending_updates);


async function trending_updates () 
{
    const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=2HgAvudoWdCgxf4i72FF9xf1m4N2VBib&limit=5");
    const json = await response.json();
    const json_n = json.data.length;
    for(let i = 0; i<json_n; i++) 
    {
        trending_text_a.innerHTML += `<a>${json.data[i].title}, </a>`;    
    }
}
 