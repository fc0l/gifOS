import { img_gifmax } from './routes.js';

export const button_download = document.getElementById("gifmax-button2");

button_download.addEventListener("click", () => window.open(`${img_gifmax.src}`, '_blank'))

