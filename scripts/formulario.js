const products = [
    { id: "fc-1888", name: "capacitor de fluxo", averagerating: 4.5 },
    { id: "fc-2050", name: "fios elétricos", averagerating: 4.7 },
    { id: "fs-1987", name: "circuitos de tempo", averagerating: 3.5 },
    { id: "ac-2000", name: "reator de baixa tensão", averagerating: 3.9 },
    { id: "jj-1969", name: "equalizador de distorção", averagerating: 5.0 }
];

const selectProduto = document.querySelector("#produto");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectProduto.appendChild(option);
});

// Rodapé
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;