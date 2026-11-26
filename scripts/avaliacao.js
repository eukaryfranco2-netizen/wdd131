const contadorSpan = document.querySelector("#contador");

// getItem devolve null se a chave não existir; Number(null) = 0
let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

totalAvaliacoes++;
localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

contadorSpan.textContent = totalAvaliacoes;

// Rodapé
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;