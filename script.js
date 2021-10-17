let btnCheck = document.querySelector('button');
let result = document.querySelector('h1');
var fridge=new Array(2);
for (let i=0;i<fridge.length;i++)
{
  fridge[i]=prompt("enter fridge element");
}
var ingredients=new Array(2);
for (let i=0;i<ingredients.length;i++)
{
  ingredients[i]=prompt("enter ingredients element");
}

function validateRecipe() {
btnCheck.addEventListener('click', () => {
  let fridge1 = fridge.map(fridge => fridge.toLowerCase());
  let ingredients1 = ingredients.map(ingredients => ingredients.toLowerCase());
    fridge1.sort();
    ingredients1.sort();
    
    let fridge2 = fridge1.toString();
    let ingredients2 = ingredients1.toString();
    result.innerText = ingredients2 === fridge2 ? 'True' : 'False';
   
});}
validateRecipe();