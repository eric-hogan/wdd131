// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//       {
//         place: "Rexburg, ID",
//         length: "5 years",
//       },
//       {
//         place: "Ammon, ID",
//         length: "3 years",
//       },
//       {
//         place: "Sandy, UT",
//         length: "1 year",
//       },
//     ],
//   };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  // let favoriteFood1 = document.createElement("li");
  // favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  // let favoriteFood2 = document.createElement("li");
  // favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  // let favoriteFood3 = document.createElement("li");
  // favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  // let favoriteFood4 = document.createElement("li");
  // favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  // document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  // document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  // document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  // document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// function createandAppendFoodItem (food){
//   let favoriteFood = document.createElement('li')
//   favoriteFood.textContent = food
//   foodsElement.appendChild(favoriteFood)
// }

// myInfo.favoriteFoods.forEach(createandAppendFoodItem)

// const foodsElement = document.querySelector('#favorite-foods');

// function mapFoodItem (food) {
//   let favoriteFood = document.createElement('li')
//   favoriteFood.textContent = food
//   return favoriteFood;
// }

// // const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // foodsElement.innerHTML = foodListElements.join('');
// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// foodsElement.innerHTML = foodListElements.join('');



// // The map example could be simplified as below:
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");

// OR we could in fact simplify this down to one line!
// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
//   .map((food) => `<li>${food}</li>`)
//   .join("");


// const foodsElement = document.querySelector('#favorite-foods');


// function mapFoodItem (food) {
//   let favoriteFood = document.createElement('li')
//   favoriteFood.textContent = food
//   return favoriteFood;
// }

// function foodItem (food) {
//  let foods = document.createElement('li')
//  favoriteFood.textContent = food
// }

// function placeItems (places) {
//   places = <dt>${place.place}</dt><dd>${place.length}</dd>;
// }


const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// studentReport.forEach(display){
//   if report < 30;
//     console.log(Element)
// };

// function display (reports){
// let report = studentReport(Element);

// }

// for (let i = 0; i < studentReport.length; i++){
//   if (studentReport[i]<LIMIT)
//   console.log(studentReport[i])}



let i = 0 
while (i < studentReport.length){
  if (studentReport[i] < LIMIT){
  console.log(studentReport[i])};
  i++;
}