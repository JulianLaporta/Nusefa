// Obtiene todos los enlaces de las pestañas y contenidos de las pestañas
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Añade un evento click a cada enlace de pestaña
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remueve la clase activa de todos los enlaces y contenidos
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Añade la clase activa al enlace y contenido clicado
        document.querySelector(link.getAttribute('href')).classList.add('active');
        link.classList.add('active');
    });
});

// Funcionalidad para el menú desplegable
const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = link.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

// Oculta el menú desplegable si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
    }
});

// Buscar contenido
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    alert(`Buscando: ${query}`);
});

// Testimonios de rotación
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('#testimonios').addEventListener('click', (e) => {
    if (e.target.matches('.testimonials::before')) {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    } else if (e.target.matches('.testimonials::after')) {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }
});

// Inicializa el primer testimonial
showTestimonial(currentTestimonialIndex);

// Mensajes de éxito para el formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito!');
});

// Mostrar/ocultar el botón de volver arriba
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Desplazar al inicio al hacer clic en el botón de volver arriba
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar animación de carga mientras se carga la página
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('loading');
});

// Inicializar el carousel de imágenes
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
});

// Inicializa el primer elemento del carousel
showImage(currentIndex);

// Formulario de Suscripción
document.getElementById('subscription-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Suscripción exitosa!');
    document.getElementById('email').value = '';
});

// Lightbox para Galería
document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${el.getAttribute('href')}" alt="Imagen">
                <button class="lightbox-close">X</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        document.querySelector('.lightbox-close').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
    });
});

// Efecto de Parallax y Testimonios - Carrusel
document.addEventListener("DOMContentLoaded", () => {
    const layers = document.querySelectorAll('.parallax-layer');
    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        layers.forEach(layer => {
            layer.style.transform = `translateY(${offset * -0.5}px)`;
        });
    });

    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        index = (index + 1) % testimonials.length;
    }
    setInterval(showTestimonial, 5000);

    document.querySelectorAll('.rating .star').forEach(star => {
        star.addEventListener('click', () => {
            const rating = Array.from(star.parentElement.children).indexOf(star) + 1;
            alert(`Has calificado con ${rating} estrella(s)`);
        });
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        element.classList.add('animate');
    });
});
document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.dropdown').contains(event.target);
    if (!isClickInside) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
    }
});

document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', function() {
        const menu = this.nextElementSibling;
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
            menu.style.display = 'block';
        }
    });
});

