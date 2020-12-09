import { nav_bar_burger, mobile, list, nav_bar_cancel } from './darkmode.js';
import { ventana_crear_gifo} from './routes.js';

const crear_gif = document.getElementById("navbar-crear-gif");
const trend_gifs = document.getElementById("trend-gifos");
const body = document.body;

nav_bar_burger.addEventListener('click', showMenu);
nav_bar_cancel.addEventListener('click', showMenu);
crear_gif.addEventListener('click', ventana_crear_gifo);
localStorage.setItem("menuOpen", false);

export function showMenu () {
        if(localStorage.getItem("menuOpen") == "false"){
            list.style.display = "block";
            nav_bar_burger.style.display = "none";
            nav_bar_cancel.style.display = "block";
            body.style.overflow = "hidden";
            localStorage.setItem("menuOpen", true);
            crear_gif.style.display = "block";
        } else {
            list.style.display = "none";
            nav_bar_cancel.style.display = "none";
            nav_bar_burger.style.display = "block";
            body.style.overflow = "visible";
            crear_gif.style.display = "none";
            localStorage.setItem("menuOpen", false);
        }    
}
