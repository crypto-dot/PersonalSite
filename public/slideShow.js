
(function () {
    let slideIndex = 1;
    const dots = document.querySelectorAll('.dot'); 
    addEventListenersToElements();
    showSlides(slideIndex);

    function moveSlides(n) {
        showSlides(slideIndex +=Number(n.target.dataset.index) );
    };

    function currentSlide(n) {
        showSlides(slideIndex = Number(n.target.dataset.index));
    };

    function showSlides(n) {
        const slides = document.querySelectorAll('.mySlides');
        let i;
        if (n < 1) { slideIndex = slides.length;}
        if (n > slides.length) {slideIndex = 1;}
        for( i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for(i = 0; i <slides.length; i++) {
            dots[i].className =  dots[i].className.replace('active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
    };

    function addEventListenersToElements () {
        const prevButton = document.querySelector('.prev');
        const nextButoon = document.querySelector('.next');
        
        prevButton.addEventListener('click', moveSlides.bind(prevButton));
        nextButoon.addEventListener('click', moveSlides.bind(nextButoon));

        dots.forEach(dot => dot.addEventListener('click', currentSlide.bind(dot) ) );

        slideIndex = 1;
    };

})();