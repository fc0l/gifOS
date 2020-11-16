import { navbar_favoritos, ventana_favoritos, navbar_mis_gifos, ventana_mis_gifos, navbar_button_crear, ventana_crear_gifo } from "./modules/routes.js";
import { search_input, sugerencias_active, search_icon, limpiar_campo, limpiar_campo_sug } from "./modules/input.js";

navbar_favoritos.addEventListener("click", ventana_favoritos);
navbar_mis_gifos.addEventListener("click", ventana_mis_gifos);
navbar_button_crear.addEventListener("click", ventana_crear_gifo);
search_input.addEventListener("keyup", sugerencias_active);
search_input.addEventListener("blur", limpiar_campo_sug);
search_icon.addEventListener("click", limpiar_campo);














