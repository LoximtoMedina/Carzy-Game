/*Para mover las opciones de los carros*/
const imglis = [];
let index = 0;
const totalImages = 14;

function opimagen(index) {
  const images = document.querySelectorAll('.img');//images es como una lista de todos los elementos con la clase .img
  images.forEach((img, i) => {//es un ciclo en el cual la variable i toma el valor de la posicion de cada elemento
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  opimagen(index);
}

function nextImage() {
  index = (index + 1) % totalImages;
  opimagen(index);
}
//definir los botones next y prev
const prevButton = document.querySelector('.btn1');
const nextButton = document.querySelector('.btn2');

//eventos de los botones next y prev
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
opimagen(index);//la imagen base que se va cargar

// Para agregar todas las URLs en una lista
document.querySelectorAll('.img img').forEach(img => {
  imglis.push(img.src);
});

//definir el boton aceptar
const aceptar = document.querySelector('.aceptar');

//Al darle click aceptar se almacena la url de la imagen
aceptar.addEventListener('click', function() {
  src=imglis[index];
  carros.style.display='none';
  aceptar.style.display='none';
});


//botones de menu
const autos=document.querySelector('.autos');
const dificultad=document.querySelector('.dificultad');
const iniciar=document.querySelector('.iniciar');

//ventanas/cajas autos/dificultades
const modo=document.querySelector('.caja-dificultad');
const carros=document.querySelector('.caja-autos');

/*Aparecer el menu de carros*/
autos.addEventListener('click',function(){
  carros.style.display='flex';
  aceptar.style.display='flex';
});

/*Aparecer el Menu de dificultades*/
dificultad.addEventListener('click',function(){
  modo.style.display='flex';
})


//Ingresar al Juego
const menu=document.querySelector('.menu');
iniciar.addEventListener("click",function(){
    // Oculta el menú.
    menu.style.display='none';

    // Muestra el carro.
    const userCar=document.querySelector(".userCar");
    userCar.style.display="block";

    // Crea en enlace entre el archivo de JavaScript que contiene el código del juego con el HTML de la página.
    const game=document.querySelector("#game");
    game.setAttribute("type", "module");
    game.setAttribute("src", "javascript/scriptforgame.js");

    // Reproduce el audio.
    const gameTheme=document.querySelector("#gameTheme");
    gameTheme.play()
})


//elegir dificultad
const facil=document.querySelector('.facil')
const medio=document.querySelector('.medio')
const dificil=document.querySelector('.dificil')
let op;
//elegir dificultad
facil.addEventListener('click',function(){
  op='facil'
  modo.style.display='none';
})

medio.addEventListener('click',function(){
  op='medio'
  modo.style.display='none';
})

dificil.addEventListener('click',function(){
  op='dificil'
  modo.style.display='none';
})

//variables del menu de volumen
const soundSettingsButton = document.querySelector('.settings');
const soundSettingsMenu = document.getElementById('sound-settings-menu');
const closeSoundSettingsButton = document.getElementById('close-sound-settings');
const soundOnButton = document.getElementById('sound-on');
const soundOffButton = document.getElementById('sound-off');
const volumeControl = document.getElementById('volume-control');
const audio = document.getElementById('background-audio');

    soundSettingsButton.addEventListener('click', function () {
        if (soundSettingsMenu.style.display === 'block') {
            soundSettingsMenu.style.display = 'none';
        } else {
            soundSettingsMenu.style.display = 'block';
        }
    });
//para activar la musica
    soundOnButton.addEventListener('click', function () {
        audio.play();
    });
//para pausar la musica
    soundOffButton.addEventListener('click', function () {
        audio.pause();
    });
//manejar el volumen de la musica
    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value;
    });
