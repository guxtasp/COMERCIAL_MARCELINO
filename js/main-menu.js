// Obter o elemento HTML que representa o botão do menu hamburguer
const btnMobile = document.getElementById('btn-mobile');

// Definir a função que será chamada quando o botão do menu hamburguer for clicado ou tocado
function toggleMenu(event) {
  // Prevenir o comportamento padrão do evento touchstart em dispositivos móveis (o que é uma rolagem comum)
  if (event.type === 'touchstart') event.preventDefault();
  
  // Obter o elemento HTML que representa o menu hamburguer
  const nav = document.getElementById('nav');
  
  // Alternar a classe 'active' do elemento HTML do menu hamburguer
  nav.classList.toggle('active');
  
  // Verificar se a classe 'active' está presente no elemento HTML do menu hamburguer
  const active = nav.classList.contains('active');
  
  // Atualizar o atributo 'aria-expanded' do botão do menu hamburguer com o valor booleano da classe 'active'
  event.currentTarget.setAttribute('aria-expanded', active);
  
  // Alterar o atributo 'aria-label' do botão do menu hamburguer dependendo se o menu hamburguer está aberto ou fechado
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

// Adicionar ouvinte de eventos para o clique no botão do menu hamburguer, que chama a função toggleMenu
btnMobile.addEventListener('click', toggleMenu);

// Adicionar ouvinte de eventos para o evento touchstart no botão do menu hamburguer, que chama a função toggleMenu
btnMobile.addEventListener('touchstart', toggleMenu);

// ----------------------------------------------------------

// Criar uma instância do ScrollReveal com as configurações padrão, incluindo a redefinição dos estados de todos os elementos revelados em cada ciclo
window.sr = ScrollReveal({ reset: true });

// Revelar os elementos que têm a classe 'section-promocao' com duração de animação de 1000ms
sr.reveal('.section-promocao', { duration: 1000 });

// Revelar os elementos que têm a classe 'section-orcamento' com duração de animação de 1000ms
sr.reveal('.section-orcamento', { duration: 1000 });

// ----------------------------------------------------------

function criarLink() {
  // Obter o texto do elemento de texto
  const textoElemento = document.getElementById("title-destaca");
  const texto = textoElemento.textContent.trim();

  // Separar o texto em palavras usando o método split() e armazená-las em um array
  const palavras = texto.split(" ");

  // Juntar as palavras do array com o símbolo "+" usando o método join() e armazená-las em uma string
  const textoLink = palavras.join("+");

  // Obter o elemento de link e atualizar seu href
  const linkElemento = document.getElementById("manipulado");
  linkElemento.href = "https://wa.me/5577999699110?text=Olá!+Gostaria+de+pedir+o+produto+" + textoLink;
}

document.addEventListener("DOMContentLoaded", function() {
  criarLink();
});
