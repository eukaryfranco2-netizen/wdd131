
// ===== RODAPÉ: ANO E ÚLTIMA MODIFICAÇÃO =====

const anoSpan = document.querySelector('#ano');
const modificadoSpan = document.querySelector('#modificado');

// Mostrar o ano atual
anoSpan.textContent = new Date().getFullYear();

// Mostrar a data da última modificação
modificadoSpan.textContent = document.lastModified;


// ===== MENU HAMBÚRGUER =====

const botaoMenu = document.querySelector('#menu');
const nav = document.querySelector('nav');

// Detectar o clique no botão
botaoMenu.addEventListener('click', () => {

    // Abrir ou fechar o menu
    nav.classList.toggle('aberto');

    // Verificar se o menu está aberto
    if (nav.classList.contains('aberto')) {

        botaoMenu.textContent = '✖';
        botaoMenu.setAttribute('aria-label', 'Fechar menu');

    } else {

        botaoMenu.textContent = '≡';
        botaoMenu.setAttribute('aria-label', 'Abrir menu');

    }

});
