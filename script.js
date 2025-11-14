// Script simples para interações no site Dexter

console.log("Site Dexter carregado com sucesso!");

// Efeito de clique nos cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = '0.2s';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});

// Mensagem ao usuário
alert("Bem-vindo ao site sobre Dexter!");
