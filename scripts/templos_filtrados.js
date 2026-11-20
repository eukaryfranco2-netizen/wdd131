// ===== DADOS =====
const templos = [
  // --- 7 templos fornecidos no enunciado ---
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // --- Templos adicionais (seus) ---
  {
    nomeDoTemplo: "Templo de São Paulo",
    localizacao: "São Paulo, São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
    nomeDoTemplo: "Templo do Rio de Janeiro",
    localizacao: "Rio de Janeiro, Rio de Janeiro, Brasil",
    consagracao: "2022, 8 de maio",
    area: 29966,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Brasília",
    localizacao: "Brasília, Distrito Federal, Brasil",
    consagracao: "2023, 17 de setembro",
    area: 25000,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Berna, Suíça",
    localizacao: "Zollikofen, Berna, Suíça",
    consagracao: "1955, 11 de setembro",
    area: 35546,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Fortaleza",
    localizacao: "Fortaleza, Ceará, Brasil",
    consagracao: "2019, 2 de junho",
    area: 36000,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Caracas, Venezuela",
    localizacao: "Caracas, Distrito Capital, Venezuela",
    consagracao: "2000, 20 de agosto",
    area: 15332,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
  },
  {
    nomeDoTemplo: "Templo de Toronto, Canadá",
    localizacao: "Brampton, Ontário, Canadá",
    consagracao: "1990, 25 de agosto",
    area: 57982,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Puebla, México",
    localizacao: "Puebla, Puebla, México",
    consagracao: "2024, 19 de maio",
    area: 35861,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Seul, Coreia do Sul",
    localizacao: "Seul, Coreia do Sul",
    consagracao: "1985, 14 de dezembro",
    area: 28057,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  }
];

// ===== SELEÇÃO DE ELEMENTOS =====
const areaCartoes = document.querySelector("#cartoes");

// ===== RODAPÉ =====
document.querySelector("#ano").textContent = new Date().getFullYear();
document.querySelector("#modificado").textContent = document.lastModified;

// ===== FUNÇÃO AUXILIAR: pega o ano de "2005, 7 de agosto" =====
function pegarAno(templo) {
  return parseInt(templo.consagracao.split(",")[0]);
}

// ===== FUNÇÃO QUE CRIA OS CARTÕES =====
function criarCartoes(lista) {
  areaCartoes.innerHTML = "";

  lista.forEach((templo) => {
    const cartao = document.createElement("figure");

    cartao.innerHTML = `
      <h3>${templo.nomeDoTemplo}</h3>
      <p><strong>Localização:</strong> ${templo.localizacao}</p>
      <p><strong>Consagração:</strong> ${templo.consagracao}</p>
      <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés²</p>
      <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
    `;

    areaCartoes.appendChild(cartao);
  });
}

// ===== MARCA O LINK ATIVO NO MENU =====
function marcarAtivo(link) {
  document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"));
  link.classList.add("active");
}

// ===== EVENTOS DO MENU =====
const linkInicio = document.querySelector("#inicio");
const linkAntigos = document.querySelector("#antigos");
const linkNovos = document.querySelector("#novos");
const linkGrandes = document.querySelector("#grandes");
const linkPequenos = document.querySelector("#pequenos");

linkInicio.addEventListener("click", (e) => {
  e.preventDefault();
  marcarAtivo(linkInicio);
  criarCartoes(templos);
});

linkAntigos.addEventListener("click", (e) => {
  e.preventDefault();
  marcarAtivo(linkAntigos);
  criarCartoes(templos.filter((t) => pegarAno(t) < 1900));
});

linkNovos.addEventListener("click", (e) => {
  e.preventDefault();
  marcarAtivo(linkNovos);
  criarCartoes(templos.filter((t) => pegarAno(t) > 2000));
});

linkGrandes.addEventListener("click", (e) => {
  e.preventDefault();
  marcarAtivo(linkGrandes);
  criarCartoes(templos.filter((t) => t.area > 90000));
});

linkPequenos.addEventListener("click", (e) => {
  e.preventDefault();
  marcarAtivo(linkPequenos);
  criarCartoes(templos.filter((t) => t.area < 10000));
});

// ===== BOTÃO DO MENU (celular) =====
const botaoMenu = document.querySelector("#menu");
botaoMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("aberto");
});

// ===== AO CARREGAR A PÁGINA: mostra todos =====
criarCartoes(templos);