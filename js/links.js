
document.addEventListener('DOMContentLoaded', function () {
    // Detectar cuando las secciones están en el viewport
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Agregar clases o estilos cuando la sección es visible
                entry.target.classList.add('section-visible');
            } else {
                // Quitar clases o estilos cuando la sección no es visible
                entry.target.classList.remove('section-visible');
            }
        });
    });

    // Observar todas las secciones
    sections.forEach((section) => {
        observer.observe(section);
    });

    // Desplazamiento suave para todos los enlaces con la clase smooth-scroll
    document.querySelectorAll('.smooth-scroll').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
