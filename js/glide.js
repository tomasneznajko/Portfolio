document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
    }).mount();
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

// document.querySelectorAll('[data-bs-toggle="modal"]').forEach((button) => {
//     button.addEventListener('click', () => {
//         const modalId = button.getAttribute('data-bs-target');
//         const targetModal = document.querySelector(modalId);

//         if (targetModal && !targetModal.dataset.loaded) {
//             // Aquí defines el contenido dinámico del modal según su ID
//             const content = getModalContent(modalId);
//             targetModal.querySelector('.modal-body').innerHTML = content;
//             targetModal.dataset.loaded = true;
//         }
//     });
// });

// function getModalContent(modalId) {
//     switch (modalId) {
//         case '#kernel':
//             return `<ul class="content__list">
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Estrategia de ejecución multihilos para mantener una conexión activa con cada una de las instanciaciones de los otros módulos</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Administrar los procesos lanzados por medio de las consolas utilizando la estructura PCB, donde se almacenará información administrativa y el contexto de ejecución del proceso. Se envia a CPU al ejecutar el proceso.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Crear planificador de largo plazo: Planificar los procesos en los estados New y Exit, donde se comunica con Memoria para inicializar o liberar los recursos asignados a estos.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Crear planificador de corto plazo: Planificar los procesos en los estados Ready, Block y Exec, empleando el algoritmo HRRN o FIFO. Mantener una comunicación activa con CPU.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Gestionar los recursos determinados en archivo de configuración y utilizados en las ejecuciones de los procesos.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Administrar el espacio brindado en Memoria. Solicitar creación o eliminación de segmentos a Memoria.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> En caso de compactación en Memoria, verificar que no haya operaciones en File System o Memoria para iniciar la actualización de PCB al recibir tabla de segmentos actualizada por Memoria.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Orquestar las llamadas a File System, implementando una tabla global de archivos abiertos y bloqueos exclusivos y obligatorios para la gestión de los mismos.</p></li>
//                     </ul>
//             `;
//         case '#api_rest':
//             return `<ul class="content__list">
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Estrategia de ejecución multihilos para mantener una conexión activa con cada una de las instanciaciones de los otros módulos</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Administrar los procesos lanzados por medio de las consolas utilizando la estructura PCB, donde se almacenará información administrativa y el contexto de ejecución del proceso. Se envia a CPU al ejecutar el proceso.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Crear planificador de largo plazo: Planificar los procesos en los estados New y Exit, donde se comunica con Memoria para inicializar o liberar los recursos asignados a estos.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Crear planificador de corto plazo: Planificar los procesos en los estados Ready, Block y Exec, empleando el algoritmo HRRN o FIFO. Mantener una comunicación activa con CPU.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Gestionar los recursos determinados en archivo de configuración y utilizados en las ejecuciones de los procesos.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Administrar el espacio brindado en Memoria. Solicitar creación o eliminación de segmentos a Memoria.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> En caso de compactación en Memoria, verificar que no haya operaciones en File System o Memoria para iniciar la actualización de PCB al recibir tabla de segmentos actualizada por Memoria.</p></li>
//                         <li class="content__text tab-icon"><iconify-icon icon="solar:star-bold" style="color: #ffc107;"></iconify-icon> <p class="content__text"> Orquestar las llamadas a File System, implementando una tabla global de archivos abiertos y bloqueos exclusivos y obligatorios para la gestión de los mismos.</p></li>
//                     </ul>
//             `;
        
//     }
// }


document.querySelectorAll('[data-bs-toggle="modal"]').forEach((button) => {
    button.addEventListener('click', () => {
        glide.destroy(); // Desmonta Glide.js al abrir el modal
    });
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('hidden.bs.modal', () => {
        glide.mount(); // Remonta Glide.js al cerrar el modal
    });
});