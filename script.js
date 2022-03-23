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
