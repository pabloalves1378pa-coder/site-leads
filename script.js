const form = document.getElementById('leadForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const whatsappCliente = form.whatsapp.value.trim();

  if (whatsappCliente.length < 10) {
    mensagem.textContent = 'Digite um WhatsApp válido.';
    mensagem.style.color = '#f87171';
    return;
  }

  const numeroDestino = '34991727924';
  const texto = `Olá, meu nome é ${nome} e quero receber uma proposta.`;
  const linkWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

  mensagem.textContent = `Perfeito, ${nome}! Abrindo o WhatsApp...`;
  mensagem.style.color = '#4ade80';

  window.open(linkWhatsapp, '_blank');

  form.reset();
});
