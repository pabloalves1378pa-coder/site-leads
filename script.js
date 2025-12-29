const form = document.getElementById('leadForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = form.nome.value;
  const whatsapp = form.whatsapp.value;

  const numero = '34991727924';
  const texto = `Olá, me chamo ${nome} e quero um site profissional.`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link, '_blank');
});
