import { cocktailsApi } from './apiConsuptio.js'
import { showIngredients } from './bringIngredients.js'

const createCocktailInformation = (cocktail) => {

    const cocktailInformation = document.querySelector('#cocktail')
    while (cocktailInformation.firstChild) {
        cocktailInformation.removeChild(cocktailInformation.firstChild);
    }

    const informatinCraete = (cocktail) => {
        const cocktaiInformation = document.querySelector('#cocktail');

        const cocktailName = document.createElement('h1');
        cocktailName.textContent = cocktail.strDrink
        cocktaiInformation.appendChild(cocktailName);

        const divImageAndIngredients = document.createElement('div');
        divImageAndIngredients.setAttribute('id', 'cocktailInformation');
        cocktaiInformation.appendChild(divImageAndIngredients);

        const divCocktailImage = document.createElement('div');
        divCocktailImage.setAttribute('id', 'cocktailImage');
        divImageAndIngredients.appendChild(divCocktailImage);

        const cocktailImage = document.createElement('img');
        cocktailImage.src = cocktail.strDrinkThumb;
        cocktailImage.alt = `Cocktail Name: ${cocktail.strDrink}`;
        divCocktailImage.appendChild(cocktailImage);

        const cocktailsIngredients = document.createElement('div');
        cocktailsIngredients.setAttribute('id', 'cocktailIngredients');
        divImageAndIngredients.appendChild(cocktailsIngredients);

        for (const prop in cocktail) {
            if (prop.startsWith('strIngredient') && cocktail[prop] !== null) {

                const ingredients = document.createElement('div');
                cocktailsIngredients.appendChild(ingredients);

                const ingredientImage = document.createElement('img');
                ingredientImage.src = `https://www.thecocktaildb.com/images/ingredients/${cocktail[prop]}-Medium.png`
                ingredientImage.alt = `Ingredient Name: ${cocktail[prop]}`
                ingredients.appendChild(ingredientImage);


                const ingredientName = document.createElement('p');
                ingredientName.textContent = cocktail[prop]
                ingredients.appendChild(ingredientName)
            }
        }

        const cocktailDescription = document.createElement('p')
        cocktailDescription.textContent = cocktail.strInstructions;
        cocktaiInformation.appendChild(cocktailDescription);
    }

    cocktail.map(informatinCraete)
}

export const bringInformation = async (url) => {
    createCocktailInformation(await cocktailsApi(url))

}