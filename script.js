var slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = $(".slideshow-images");
    var dots = $(".dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    slides.css("display", "none");
    
    dots.removeClass("active");
    
    $(slides[slideIndex - 1]).fadeIn(1000); 
    
    $(dots[slideIndex - 1]).addClass("active");
}

function nextSlide() {
    slideIndex++; 
    showSlide(slideIndex); 
}

setInterval(nextSlide, 7000); 

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".formulario").addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var correo = document.getElementById("correo").value;
        var mensaje = document.getElementById("mensaje").value;

        if (!nombre || !apellidos || !correo || !mensaje) {
            alert("Todos los campos son obligatorios.");
            event.preventDefault(); 
        } else {
            alert("Formulario enviado correctamente.");
        }
    });
});
