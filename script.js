/* script.js — Interações do site Dexter */

/* IMPORTANT:
   - As imagens devem existir na pasta 'images' com os nomes usados no HTML.
   - O script abre/fecha modais, permite destaque em vilões e navegação suave.
*/

document.addEventListener('DOMContentLoaded', () => {

  /* Navegação suave */
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Abrir modais de personagem */
  const moreBtns = document.querySelectorAll('.more-btn');
  moreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = document.getElementById(target);
      if(modal) openModal(modal);
    });
  });

  /* Abrir modal quando o cartão é clicado */
  document.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // evita abrir modal se clicar no botão (já tratado)
      if(e.target.closest('.more-btn')) return;
      const name = card.dataset.name;
      const modal = document.getElementById('modal-' + name);
      if(modal) openModal(modal);
    });
  });

  /* Fechar modais */
  document.querySelectorAll('.modal .modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      closeModal(modal);
    });
  });
  // fechar ao clicar fora
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeModal(modal);
    });
  });

  /* Funções auxiliares */
  function openModal(modal){
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    // travar scroll
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modal){
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  /* Ações da seção de apresentação */
  const highlightBtn = document.getElementById('highlight-villain');
  if(highlightBtn){
    highlightBtn.addEventListener('click', () => {
      // Efeito simples: encontrar o primeiro vilão e destacar com borda e animação
      const vil = document.querySelector('.villain-card');
      if(!vil) return;
      vil.style.outline = '4px solid rgba(179,0,0,0.65)';
      vil.style.transform = 'scale(1.02)';
      setTimeout(() => {
        vil.style.outline = '';
        vil.style.transform = '';
      }, 2500);
      vil.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* Botão 'Abrir Dexter' */
  const openFirst = document.getElementById('open-first');
  if(openFirst){
    openFirst.addEventListener('click', () => {
      const modal = document.getElementById('modal-dexter');
      if(modal) openModal(modal);
    });
  }

  /* Pequena interatividade nos cards (efeito hover clique) */
  document.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'scale(0.99)';
    });
    card.addEventListener('mouseup', () => {
      card.style.transform = '';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* Acessibilidade: fechar modais com ESC */
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal').forEach(m => {
        if(!m.classList.contains('hidden')) closeModal(m);
      });
    }
  });

  /* Logging de apresentação */
  console.log('Dexter — site pronto para apresentação (scripts carregados).');

});
