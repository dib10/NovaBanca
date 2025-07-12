// Animação da linha do tempo ao rolar a página
// Ativa a classe 'ativa' quando a linha do tempo entra na viewport

document.addEventListener('DOMContentLoaded', function() {
  const linhaDoTempo = document.querySelector('.linha-do-tempo');
  if (!linhaDoTempo) return;

  function animarLinhaDoTempo() {
    const rect = linhaDoTempo.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 100) {
      linhaDoTempo.classList.add('ativa');
      window.removeEventListener('scroll', animarLinhaDoTempo);
    }
  }

  window.addEventListener('scroll', animarLinhaDoTempo);
  animarLinhaDoTempo(); // Verifica ao carregar

  // Pop-up Copa do Mundo 2026 ao entrar no site
  const popup = document.getElementById('popup-copa');
  const fechar = document.getElementById('fechar-popup-copa');
  if (popup && fechar) {
    setTimeout(() => {
      popup.classList.add('ativo');
    }, 600); // atraso opcional para suavidade

    fechar.addEventListener('click', () => {
      popup.classList.remove('ativo');
    });

    // Fecha ao clicar fora do conteúdo
    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.classList.remove('ativo');
    });
  }

  // Função para copiar endereço ao clicar no botão do pop-up
  const btnCopiar = document.getElementById('btn-copiar-endereco');
  if (btnCopiar) {
    btnCopiar.addEventListener('click', function() {
      const endereco = 'Largo São José do Belém, 61\nBelenzinho\nSão Paulo - SP\nCEP: 03057-040';
      navigator.clipboard.writeText(endereco).then(() => {
        btnCopiar.textContent = 'ENDEREÇO COPIADO!';
        setTimeout(() => {
          btnCopiar.textContent = 'ESTAREI LÁ!';
        }, 1800);
      });
    });
  }
});
