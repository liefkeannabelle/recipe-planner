import React from 'react';

function RecipeCard({ recipe, onAddToMealPlan, meal}) {
  return (
    <div className="recipe-card">
      <button onClick={() => onAddToMealPlan(meal, recipe.id)}
          style={{
          padding: '8px 16px',
          marginRight: '8px',
          borderRadius: '6px',
          backgroundColor: '#e7f0ff',
          cursor: 'pointer',
    }}>
      {recipe.name}
    </button>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
