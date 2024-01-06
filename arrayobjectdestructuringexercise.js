let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // 
//   {
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   }

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?

// 'Your name is Alexjandro and you like purple'
// 'Your name is Melissa and you like green'
// 'Your name is undefined and you like green'

let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
//   console.log(raindrops); // "Raindrops on roses"
//   console.log(whiskers); // "Whiskers on Kittens"
//   console.log(aFewOfMyFavoriteThings); // "Bright copper kittens, warm woolen mittens, brown paper packages tied up with strings"

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10, 30, 20]