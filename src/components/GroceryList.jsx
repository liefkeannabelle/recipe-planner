import React from 'react';
import format from '../utils/formattingHelper';
import { IngTypes } from '../utils/enums';


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
    const formattedIngM = format(combinedIngredients, IngTypes.M);
    const formattedIngDE = format(combinedIngredients, IngTypes.DE);
    const formattedIngCS = format(combinedIngredients, IngTypes.CS);
    const formattedIngP = format(combinedIngredients, IngTypes.P);
    const formattedIngO = format(combinedIngredients, IngTypes.O);

return (
  <div>
    <h2>🛒 Grocery List</h2>
    {combinedIngredients.length === 0 ? (
      <p>No meals selected yet.</p>
    ) : (
      <div>
        {formattedIngM.length > 0 && (
          <div>
            <h3>🥩 Meat</h3>
            <ul>
              {formattedIngM.map((ing, i) => (
                <li key={`m-${i}`}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formattedIngDE.length > 0 && (
          <div>
            <h3>🧀 Dairy & Eggs</h3>
            <ul>
              {formattedIngDE.map((ing, i) => (
                <li key={`de-${i}`}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formattedIngCS.length > 0 && (
          <div>
            <h3>🥫 Canned & Shelf-Stable</h3>
            <ul>
              {formattedIngCS.map((ing, i) => (
                <li key={`cs-${i}`}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formattedIngP.length > 0 && (
          <div>
            <h3>🥬 Produce</h3>
            <ul>
              {formattedIngP.map((ing, i) => (
                <li key={`p-${i}`}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formattedIngO.length > 0 && (
          <div>
            <h3>🧂 Other</h3>
            <ul>
              {formattedIngO.map((ing, i) => (
                <li key={`o-${i}`}>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);
}

export default GroceryList;

