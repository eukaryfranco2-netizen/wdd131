
/*1. ANO ATUAL DOS DIREITOS AUTORAIS*/

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Insere o ano no elemento HTML
document.querySelector("#anoatual").textContent = anoAtual;


/* 2. DATA DA ÚLTIMA MODIFICAÇÃO */

// Obtém a data da última modificação do documento
const ultimaModificacao = document.lastModified;

// Insere a data no rodapé da página
document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${ultimaModificacao}`;
