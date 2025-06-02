
const hamButton = document.querySelector("#menu");
const nav = document.querySelector('.navigation');
const homeLink = document.getElementById("home")
const oldTemplesLink = document.getElementById("old")
const newTemplesLink = document.getElementById("new")
const largeTemplesLink = document.getElementById("large")
const smallTemplesLink = document.getElementById("small")



hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta",
    dedicated: "1923, August, 26-29",
    area: 88562,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-lds-680533-wallpaper.jpg"
  },

  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504, 
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-776441-wallpaper.jpg"
  },

  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23-26",
    area: 75000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
  }
  // Add more temple objects here...
];

showTemples(temples);

homeLink.addEventListener("click", () =>{
    showTemples(temples)
});

oldTemplesLink.addEventListener("click", () => {
    showTemples(temples.filter(temple => temple.dedicated.includes("18")));
});

newTemplesLink.addEventListener("click", () => {
    showTemples(temples.filter(temple => temple.dedicated.includes("20")));
});

largeTemplesLink.addEventListener("click", () =>  {
    showTemples(temples.filter(temple => temple.area > 90000));
});

smallTemplesLink.addEventListener("click", () =>  {
    showTemples(temples.filter(temple => temple.area < 10000));
});

function showTemples(filteredTemples){
    const templeContainer = document.getElementById("photos")
    templeContainer.innerHTML="";

    filteredTemples.forEach(temple =>{ 
        const templeCard = document.createElement("div");
        templeCard.innerHTML= `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p> 
            <p><strong>Size:</strong> ${temple.area} <strong>sq ft</strong></p>
            <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
            `;

            templeContainer.appendChild(templeCard);
            });
}





