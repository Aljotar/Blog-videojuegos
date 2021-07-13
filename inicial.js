window.addEventListener('scroll',function(){
    let animacion = document.getElementById('carousel');
    let animacionPs5 = document.getElementById('img_ps5');
    let animacionXboxCard1 = document.getElementById('xboxCard1');
    let animacionXboxCard2 = document.getElementById('xboxCard2');
    let animacionXboxCard3 = document.getElementById('xboxCard3');
    let animacionXboxCard4 = document.getElementById('xboxCard4');
    let posicionCarousel = animacion.getBoundingClientRect().top;
    let posicionPs5 = animacionPs5.getBoundingClientRect().top;
    let posicionXbox1 = animacionXboxCard1.getBoundingClientRect().top;
    let posicionXbox2 = animacionXboxCard2.getBoundingClientRect().top;
    let posicionXbox3 = animacionXboxCard3.getBoundingClientRect().top;
    let posicionXbox4 = animacionXboxCard4.getBoundingClientRect().top;

    //console.log(posicionXbox1);
    //let tamañoPantalla = window.innerHeight;

    if(posicionCarousel < 900){
        animacion.style.animation = 'carousel 2.5s ease-out'
    }
    if(posicionPs5 < 750){
        animacionPs5.style.animation = 'animacion_ps5 2s ease-out'
    }
    if(posicionXbox1 < 950){
        animacionXboxCard1.style.animation = 'xboxAnimacion 3s ease-out'
    }
    if(posicionXbox2 < 920){
        animacionXboxCard2.style.animation = 'xboxAnimacion2 3s ease-out'
    }
    if(posicionXbox3 < 950){
        animacionXboxCard3.style.animation = 'xboxAnimacion3 3s ease-out'
    }
    if(posicionXbox4 < 900){
        animacionXboxCard4.style.animation = 'xboxAnimacion 3s ease-out'
    }
})




