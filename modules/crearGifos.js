import { crear_gifo_comenzar, crear_gifo_number1, crear_gifo_number1_color, crear_gifo_number2, crear_gifo_number2_color, crear_gifo_grabar, crear_gifo_finalizar, crear_gifo_time, crear_gifo_subir, crear_gifo_repetir, crear_gifo_number3, crear_gifo_number3_color } from './darkmode.js';
import { api_key } from './input.js';
import { navbar_button_crear } from './routes.js';

navbar_button_crear.addEventListener("click", paso1);

const crear_gifo_content = document.getElementById("crear-gifo-content");
const crear_gifo_content_2 = document.getElementById("crear-gifo-content-2");
const crear_gifo_content_3 = document.getElementById("crear-gifo-content-3");
const crear_gifo3_wrapper = document.getElementById("crear-gifo-3-wrapper");
const crear_gifo3_load = document.getElementById("crear-gifo-3-load");
const crear_gifo3_load2 = document.getElementById("crear-gifo-3-load-2");
const btn3 = document.getElementById("btn3");
const down_l = document.getElementById("downl");
const btnShare = document.getElementById("btnShare");
let urls;


const img_gif = document.getElementById("img-gif");
const video_window = document.getElementById("video");
let streamm = null;
let recorder;
let form = new FormData();
let myGifs = [];
let sec = 1;
let sec2 = 0;
let min = 0;
let min2 = 0;
let inte;

crear_gifo_comenzar.addEventListener('click', comenzar);
crear_gifo_grabar.addEventListener('click', grabar);
crear_gifo_finalizar.addEventListener('click', finalizar);
crear_gifo_subir.addEventListener('click', subirGifo);
crear_gifo_number1.addEventListener('click', paso1);
crear_gifo_repetir.addEventListener('click', volverGrabar);
btnShare.addEventListener('click', copyLink);

function paso1 () {
    dete();
    crear_gifo_time.innerHTML = `00:00:00`;
    sec = 1;
    sec2 = 0;
    min = 0;
    min2 = 0;
    crear_gifo_number1.style.display = "block";
    crear_gifo_number1_color.style.display = "none";
    crear_gifo_number2_color.style.display = "none";
    crear_gifo_number2.style.display = "block";
    crear_gifo_number3_color.style.display = "none";
    crear_gifo_number3.style.display = "block";
    crear_gifo_content.style.display = "flex";
    crear_gifo_content_2.style.display = "none";
    crear_gifo_content_3.style.display = "none";    
    crear_gifo_grabar.style.display = "none"; 
    crear_gifo_comenzar.style.display = "block";
    crear_gifo_subir.style.display = "none";
    crear_gifo_repetir.style.display = "none";
    crear_gifo_finalizar.style.display = "none";
    crear_gifo_time.style.display = "none";
    crear_gifo3_wrapper.style.display = "none";
    crear_gifo3_load.style.display = "none";
    crear_gifo3_load2.style.display = "none";
    btn3.style.display = "none";
}
function volverGrabar() {
    comenzar();
}

function comenzar () {
    crear_gifo_comenzar.style.display = "none";
    crear_gifo_number1.style.display = "none";
    crear_gifo_number1_color.style.display = "block";
    crear_gifo_content.style.display = "none";
    crear_gifo_content_2.style.display = "flex";
    getMedia();
}
async function getMedia() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(stream => {
        crear_gifo_number1.style.display = "block";
        crear_gifo_number1_color.style.display = "none";
        crear_gifo_number2.style.display = "none";
        crear_gifo_number2_color.style.display = "block";
        crear_gifo_content_2.style.display = "none";
        crear_gifo_content_3.style.display = "flex";
        crear_gifo_grabar.style.display = "block";
        crear_gifo_repetir.style.display = "none";
        crear_gifo_subir.style.display = "none";
        video.style.display = "block";
        img_gif.style.display = "none";  
        video_window.srcObject = stream;
        streamm = stream;

    }).catch(e => {
        alert("Device not found");
        paso1();
    })
}
function grabar() {
    crear_gifo_time.style.display = "block";
    initC();
    crear_gifo_grabar.style.display = "none";
    crear_gifo_finalizar.style.display = "block";
    
    recorder = RecordRTC(streamm, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function () {
            return 0;
        },
    });
    recorder.startRecording();
}
function finalizar () {
    dete();
    crear_gifo_time.innerHTML = `00:00:00`;
    sec = 1;
    sec2 = 0;
    min = 0;
    min2 = 0;
    
    crear_gifo_finalizar.style.display = "none";
    crear_gifo_subir.style.display = "block";
    crear_gifo_time.style.display = "none";
    crear_gifo_repetir.style.display = "block";
    recorder.stopRecording(async() => {
        let blob = recorder.getBlob();
        var uri = URL.createObjectURL(blob);
        img_gif.src = uri;
        video.style.display = "none";
        img_gif.style.display = "block";
        form.append('file', blob, 'myGif.gif');
        down_l.href = uri;
    });
}
async function subirGifo () {
    crear_gifo_repetir.style.display = "none";
    crear_gifo_subir.style.display = "none";
    crear_gifo3_wrapper.style.display = "block";
    crear_gifo3_load.style.display = "block";
    let idCreated = await createGif(form);
    myGifs.push(idCreated);
    localStorage.setItem('myGifs', localStorage.getItem('myGifs') + ',' +idCreated);
}
const pathTendencias = `https://upload.giphy.com/v1/gifs?api_key=${api_key}`;

async function createGif(formData) {
    const response = await fetch(pathTendencias, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    const assign_value = await fetch(`https://api.giphy.com/v1/gifs?api_key=${api_key}&ids=${result.data.id}`);
    const val = await assign_value.json();
    urls = val.data[0].url;
    btn3.style.display = "flex";
    crear_gifo3_load.style.display = "none";
    crear_gifo3_load2.style.display = "block";
    crear_gifo_number2.style.display = "block";
    crear_gifo_number2_color.style.display = "none";
    crear_gifo_number3.style.display = "none";
    crear_gifo_number3_color.style.display = "block";
    return result.data.id;    
}

function initC() {
    inte = setInterval(timeE, 1000);
}
function timeE() {
    crear_gifo_time.innerHTML = `00:${min2}${min}:${sec2}${sec}`;
    sec++;
    if (sec == 10) {
        sec = 0;
        sec2++;
        if (sec2 == 6) {
            sec2 = 0;
            min++;
            if (min == 10) {
                min = 0;
                min2++;
            }
        }
    }
}
function dete() {
    clearInterval(inte);
    
}

function copyLink () {    
    window.open(urls, '_blank');
}