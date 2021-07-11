window.addEventListener('scroll',function(){
    let animacion = document.getElementById('carousel');
    let posicionCarousel = animacion.getBoundingClientRect().top;
    console.log(posicionCarousel);
    let tamañoPantalla = window.innerHeight;

    if(posicionCarousel < 900){
        animacion.style.animation = 'carousel 1s ease-out'
    }
})