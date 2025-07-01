import React from 'react';
import makeReadable from '../utils/readabilityHelper';

function RecipeCard({ recipe, onAddToMealPlan }) {
  const readableIngredients = makeReadable(recipe.ingredients);

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <ul>
        {readableIngredients.map((ing, i) => (
          <li key={i}>{ing.quantity} {ing.unit} {ing.name}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
      <div>
        <button onClick={() => onAddToMealPlan('breakfast', recipe.id)}>Breakfast</button>
        <button onClick={() => onAddToMealPlan('lunch', recipe.id)}>Lunch</button>
        <button onClick={() => onAddToMealPlan('dinner', recipe.id)}>Dinner</button>
      </div>
    </div>
  );
}

export default RecipeCard;
