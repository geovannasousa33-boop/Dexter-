// Animação simples ao carregar a página
window.onload = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in';
        setTimeout(() => {
            section.style.opacity = 1;
        }, 300);
    });
};
