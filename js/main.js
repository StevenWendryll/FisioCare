// Efeito de rolagem da barra de navegação
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Rolagem suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });


            // Fechar menu móvel após clicar
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});


// Tratamento de envio de formulário
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();


        // Aqui você normalmente enviaria os dados do formulário para um servidor
        // Para demonstração, mostraremos apenas um alerta
        const formName = this.querySelector('button[type="submit"]').textContent.trim();

        if (formName === 'Solicitar Agendamento') {
            alert('Solicitação de agendamento enviada com sucesso! Entraremos em contato para confirmar.');
        } else if (formName === 'Assinar') {
            alert('Obrigado por assinar nossa newsletter!');
        }

        this.reset();
    });
});


// Inicializar dicas de ferramentas
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Animação na rolagem
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .icon-box, .hero-image img');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}


// Define o estado inicial para elementos animados
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const iconBoxes = document.querySelectorAll('.icon-box');
    const heroImage = document.querySelector('.hero-image img');

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    iconBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'scale(0.8)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(20px)';
        heroImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }


    // Acionar animação inicial
    setTimeout(animateOnScroll, 100);
});

window.addEventListener('scroll', animateOnScroll);