document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
    }).mount();
    console.log(glide);
    // Detectar cuando las secciones están en el viewport
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
            }
        });
    });

    // Observar todas las secciones
    sections.forEach((section) => observer.observe(section));
    
    // Desplazamiento suave para enlaces con clase smooth-scroll
    document.querySelectorAll('.submenu__link-me').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            console.log(targetId);
            if (targetSection) {
                if (this.hasAttribute('data-carousel')) {
                    const targetSlide = document.getElementById(targetId);
                    if (targetSlide && targetSlide.dataset.projectIndex) {
                        const slideIndex = targetSlide.dataset.projectIndex;
                        console.log(`Moviendo al slide: ${slideIndex}`);
                        glide.go(`=${slideIndex}`);
                    } else {
                        console.error(`Slide no encontrado o sin data-project-index: ${targetId}`);
                    }
                }

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                });
            } else {
                console.error(`Sección no encontrada: ${targetId}`);
            }
        });
    });
});
