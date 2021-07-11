window.addEventListener('scroll',function(){
    let animacion = document.getElementById('carousel');
    let animacionPs5 = document.getElementById('img_ps5');
    let posicionCarousel = animacion.getBoundingClientRect().top;
    let posicionPs5 = animacionPs5.getBoundingClientRect().top;
    console.log(posicionPs5);
    let tamañoPantalla = window.innerHeight;

    if(posicionCarousel < 900){
        animacion.style.animation = 'carousel 1s ease-out'
    }
    if(posicionPs5 < 730){
        animacionPs5.style.animation = 'animacion_ps5 2s ease-out'
    }
})

