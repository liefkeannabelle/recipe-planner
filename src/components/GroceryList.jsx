import React from 'react';

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

    return (
        <div>
        <h2>🛒 Grocery List</h2>
        {combinedIngredients.length === 0 ? (
            <p>No meals selected yet.</p>
        ) : (
            <ul>
            {combinedIngredients.map((ing, i) => (
                <li key={i}>
                {ing.quantity} {ing.unit} {ing.name}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}

export default GroceryList;

