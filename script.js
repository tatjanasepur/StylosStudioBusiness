// Animacije sa ScrollReveal.js
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.hero-content', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        delay: 300,
        easing: 'ease-in-out',
        reset: false
    });

    ScrollReveal().reveal('.feature-card', {
        duration: 1200,
        origin: 'bottom',
        distance: '20px',
        interval: 200,
        easing: 'ease-in-out',
        reset: false
    });

    ScrollReveal().reveal('.page-header', {
        duration: 1200,
        origin: 'left',
        distance: '100px',
        delay: 200,
        easing: 'ease-in-out',
        reset: false
    });

    ScrollReveal().reveal('.content p, .services-list, .contact-form', {
        duration: 1500,
        origin: 'bottom',
        distance: '40px',
        delay: 400,
        easing: 'ease-in-out',
        reset: false
    });
});

// Kontakt forma — jednostavna validacija i alert
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Hvala što ste nas kontaktirali! Odgovorićemo vam uskoro.');
    e.target.reset();
});
