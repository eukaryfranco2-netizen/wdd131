let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Última Modificação: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
    document.querySelector('h1').classList.toggle('show');
    document.querySelector('#navmenu').classList.toggle('show');
    hambutton.classList.toggle('show');

});

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
    });

    element.classList.add("active");
}

document.querySelector('#inicio').addEventListener('click', () => {
    toggleActive(document.querySelector('#inico'));
    createTempleCard (temples);
});

document.querySelector('#antigos').addEventListener('click', () => {
    toggleActive(document.querySelector('#antigos'));
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date('DATA')));
});

document.querySelector('#novos').addEventListener('click', () => {
    toggleActive(document.querySelector('#novos'));
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date('DATA')));
});

document.querySelector('#grandes').addEventListener('click', () => {
    toggleActive(document.querySelector('#grandes'));
    createTempleCard(temples.filter(temple => temple.area > 5000));
});

document.querySelector('#pequenas').addEventListener('click', () => {
    toggleActive(document.querySelector('#pequenas'));
    createTempleCard(temples.filter(temple => temple.area < 5000));
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigéria",
        dedicated: "07/08/2005",
        area: 11500,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, Estados Unidos",
        dedicated: "21/05/1888",
        area: 74792,
        imagUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, Estados Unidos",
        dedicated: "07/06/2015",
        area: 96630,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo,Guam",
        dedicated: "02/05/2020",
        area: 6861,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, Estados Unidos",
        dedicated: "19/11/1974",
        area: 156558,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },

    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "10/01/1986",
        area: 9600,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },

    {
        templeName: "Cidade de México, México",
        location: "Cidade de México, México",
        dedicated: "02/12/1983",
        area: 116642,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },

//Templos acionales

    {
        templeName: "Templo de Caracas Venezuela",
        location: "Caracas, Distrito Capital, Venezuela",
        dedicated: "20/08/2000",
        area: 1.425,
        imagUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
    },

    {
        templeName: "Templo de Toronto Ontário",
        location: "Brampton, Ontário, Canadá",
        dedicated: "25/08/1990",
        area: 5.387,
        imagUrl: "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
    },

    {
        templeName: "Templo de Seul Coreia",
        location: "Seul, Coreia do Sul",
        dedicated: "14/12/1985",
        area: 2.607,
        imagUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
    },

]

createTempleCard(temples);

function createTempleCard(templos){
    document.querySelector('.res-grid').innerHTML = '';

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class = "Label">Localização:</span> ${temple.location}`;
        dedication.innerHTML = `<span class = "Label">Dedicado:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "Label">Tamanho:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `Templo ${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    })

}
