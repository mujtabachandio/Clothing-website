

window.onload = function() {
    var slides = document.querySelectorAll('.slide');
    var index = 0;

    function showSlide() {
        slides.forEach(function(slide) {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
        index++;

        if (index === slides.length) {
            index = 0;
        }

        setTimeout(showSlide, 4000); // Change image every 4 seconds
    }

    showSlide();
}

