const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})