import React from 'react';
import makeReadable from '../utils/readabilityHelper';
import { Units } from '../utils/enums';

function GroceryList({ recipes, mealPlan }) {
    const selectedRecipes = Object.values(mealPlan)
        .map(id => recipes.find(r => r.id === id))
        .filter(Boolean);

    const ingredientMap = {};

    selectedRecipes.forEach(recipe => {
        recipe.ingredients.forEach(({ name, quantity, unit }) => {
        const key = `${name}-${unit}`;
        if (!ingredientMap[key]) {
            ingredientMap[key] = { name, unit, quantity: 0 };
        }
        ingredientMap[key].quantity += Number(quantity);
        });
    });

    const combinedIngredients = Object.values(ingredientMap);
    const pluralCombIng = makeReadable(combinedIngredients);

    return (
        <div>
        <h2>🛒 Grocery List</h2>
        {combinedIngredients.length === 0 ? (
            <p>No meals selected yet.</p>
        ) : (
            <ul>
            {pluralCombIng.map((ing, i) => (
                <li key={i}>
                {ing.quantity} {ing.newUnit} {ing.name}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}

export default GroceryList;

