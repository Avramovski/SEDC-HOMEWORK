const nameOfRecipe = prompt("What will be the recipe");
const numberOfIngredients = parseInt(prompt("How many ingredients will you need?"));
const ingredientsArray = [];

for (let i = 0; i < numberOfIngredients; i++) {
    const ingredient = prompt('Enter your ingredient');
    ingredientsArray.push
        (`<ul>
    <li>
    ${ingredient}
    </li>
    </ul>`);
}

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

div1.innerHTML = `<p>Name of the recipe: ${nameOfRecipe}</p>`;
div2.innerHTML = `<p>I will need: ${numberOfIngredients} ingredient${numberOfIngredients > 1 ? 's' : ''}</p>`;
div3.innerHTML = `<p>Ingredients: ${ingredientsArray.join(' ')}</p>`;