const button = document.querySelector('#submitBtn')
const productName = document.querySelector('#productName')
const rating = document.querySelector('#rating')
const installDate = document.querySelector('#dateInstalled')






const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productList = document.querySelector("#productName")

function populatedList(){
  products.forEach(product => 
    {let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productList.appendChild(option);
    })};


populatedList()


button.addEventListener('click', function() {
    if (productName.value !== '' && rating.value !== '' && installDate.value !== '')
       {reviewcount()};
});

function reviewcount(){
    let numReviews = localStorage.getItem('numReviews');
    numReviews = numReviews ? JSON.parse(numReviews) + 1: 1;
    localStorage.setItem('numReviews', JSON.stringify(numReviews));
}