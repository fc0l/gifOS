import { img_gifmax } from './routes.js';
import { favoritos_container } from './routes.js';

export const button_fav = document.getElementById("gifmax-button1");


button_fav.addEventListener("click", add_fav);
function add_fav() 
{

    if (!localStorage.getItem('favoritos').split(',').includes(img_gifmax.dataset.id)) 
    {

        localStorage.setItem('favoritos', localStorage.getItem('favoritos') + ',' + img_gifmax.dataset.id);
        button_fav.style.background = "url('../assets/icon-fav-active2.svg')";
        button_fav.style.backgroundRepeat = 'no-repeat';
        button_fav.style.backgroundSize = 'contain';
        button_fav.style.backgroundColor = 'white';
        button_fav.style.borderRadius = '5px';
    }
    else 
    {
        let arr = localStorage.getItem('favoritos').split(',');
        let arr_index = arr.indexOf(img_gifmax.dataset.id);
        arr.splice(arr_index, 1);
        localStorage.setItem('favoritos', arr.toString());
        button_fav.style.background = "url('../assets/icon-fav.svg')";
    }

}