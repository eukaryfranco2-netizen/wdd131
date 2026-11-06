// ===== Rodapé: ano e última modificação =====
const anoSpan = document.querySelector('#ano');
const modificadoSpan = document.querySelector('#modificado');

anoSpan.textContent = new Date().getFullYear();
modificadoSpan.textContent = document.lastModified;

// ===== Menu hambúrguer =====
const botaoMenu = document.querySelector('#menu');
const nav = document.querySelector('nav');

botaoMenu.addEventListener('click', () => {
nav.classList.toggle('aberto');

if (nav.classList.contains('aberto')) {
    botaoMenu.textContent = '✖';
    botaoMenu.setAttribute('aria-label', 'Fechar menu');
} else {
    botaoMenu.textContent = '≡';
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
}
});