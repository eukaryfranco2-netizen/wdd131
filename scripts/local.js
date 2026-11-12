// ===== Rodapé: ano atual e data da última modificação =====
document.querySelector('#anoAtual').textContent = new Date().getFullYear();
document.querySelector('#ultimaModificacao').textContent = document.lastModified;

// ===== Clima: valores estáticos (devem ser iguais aos exibidos no HTML) =====
const temperatura = 8;   // °C
const velocidadeVento = 10; // km/h

// Fórmula de sensação térmica (métrica: °C e km/h), em uma única linha
const calcularSensacaoTermica = (temp, vento) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);

// Só calcula se as condições forem atendidas: temperatura <= 10 °C e vento > 4,8 km/h
let sensacao = 'N/A';
if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
}

document.querySelector('#sensacao').textContent = sensacao;