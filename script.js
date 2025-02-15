document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([-33.41782775327124, -70.6043980847401], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-33.41782775327124, -70.6043980847401]).addTo(map)
        .bindPopup("Fade Studio<br>Ubicación exacta")
        .openPopup();
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/corte1.png", 
        "assets/corte2.png", 
        "assets/corte3.png", 
        "assets/corte4.png", 
        "assets/corte5.png", 
        "assets/corte6.png"
    ];

    let index1 = 0, index2 = 1, index3 = 2;

    function changeImages() {
        let img1 = document.getElementById("img1");
        let img2 = document.getElementById("img2");
        let img3 = document.getElementById("img3");

        // Aplicamos el efecto slide moviendo la imagen a la izquierda
        img1.classList.add("slide-out");
        img2.classList.add("slide-out");
        img3.classList.add("slide-out");

        setTimeout(() => {
            // Cambiamos la imagen cuando la animación está en curso
            img1.src = images[index1];
            img2.src = images[index2];
            img3.src = images[index3];

            // Quitamos la animación para reiniciar el slide
            img1.classList.remove("slide-out");
            img2.classList.remove("slide-out");
            img3.classList.remove("slide-out");
            img1.classList.add("slide-in");
            img2.classList.add("slide-in");
            img3.classList.add("slide-in");

            // Actualizamos los índices para la siguiente imagen en bucle
            index1 = (index1 + 1) % images.length;
            index2 = (index2 + 1) % images.length;
            index3 = (index3 + 1) % images.length;

            // Quitamos la clase slide-in después de que termine la animación
            setTimeout(() => {
                img1.classList.remove("slide-in");
                img2.classList.remove("slide-in");
                img3.classList.remove("slide-in");
            }, 500);

        }, 500); // Tiempo de la animación antes de cambiar la imagen
    }

    setInterval(changeImages, 3000); // Cambia cada 3 segundos
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Duración de la animación
        once: true, // Solo se anima una vez
    });
});

