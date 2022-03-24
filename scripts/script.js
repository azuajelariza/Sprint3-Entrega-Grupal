const track = document.querySelector('.carrusel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carrusel__button--left')
const prevButton = document.querySelector('.carrusel__button--right')
const dotsNav = document.querySelector('.carrusel__nav')


const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slides)

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

prevButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide')
    
    const prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide)  
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);

})

//////////////////JS CARRUSEL OPCIONES ALERT///////////////
const opcion1 = document.getElementById('boton1')
const opcion2 = document.getElementById('boton2')
const opcion3 = document.getElementById('boton3')
const opcion4 = document.getElementById('boton4')
const opcion5 = document.getElementById('boton5')
const opcion6 = document.getElementById('boton6')


opcion1.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>Ahorro en los transbordos</h2>
    <p>
        Transbordos entre $0 y $200 en un periodo de 110 minutos desde la primera validación.
    </p>`
})
opcion2.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>Credito en los transbordos</h2>
    <p>¿No tienes dinero? No te precoupes ¡nosotros te cubrimos! Dos viajes a crédito que se renuevan al recargar la tarjeta.
    </p>`
    
})
opcion3.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>¿Se te perdio la tarjeta? Tranquilo</h2>
    <p>Bloqueo de saldo en caso de robo o pérdida, la tarjeta quedara inhabilitada, usted solo tendra que solicitar una nueva en la ventan de personaliza tu tarjeta o en una de las terminales de servicio.
    </p>`
    
})
opcion4.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>Inclusividad e igualdad. </h2>
    <p>Tarifas preferenciales para personas discapacitadas, pertenecientes al SISBEN, de comunidades ingidenas o personas mayores de 62 años
    </p>`

    
})
opcion5.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>Ayuda planificando tu ruta.</h2>
                <p>
                    Ayuda a mejorar el servicio, la frecuencia de los buses y la descngestion del sistema informandonos de tu hora estimada de viaje y tu origen y posterior destino, intentalo aca <a href="planeatuviaje.html">Planea tu viaje</a>
                </p>`
})
opcion6.addEventListener('click', () => {
    extraInfo.innerHTML = `
    <h2>Recarga tu tarjeta, simple, rapido y sin filas</h2>
                <p>
                    Atravez del porta puedes recargar tu tarjeta de Transmilenio desde cualquier parte haciendo uso del siguiente link, <a href="./pages/recargas.html">Recarga tu tarjeta</a> 
                </p>`
})
