import React, { useState } from 'react';
import { MealTypes } from '../utils/enums';
import RecipeCard from './RecipeCard';

function RecipeBook({ recipes, onAddToMealPlan }) {
  const [selectedMealType, setSelectedMealType] = useState('breakfast');

  const filteredRecipes = recipes.filter(recipe => recipe.mealType.includes(selectedMealType));

  return (
    <div>
      <h2>📚 Recipe Book</h2>
      <div>
        <button
          onClick={() => setSelectedMealType('breakfast')}
          style={{ fontWeight: selectedMealType === 'breakfast' ? 'bold' : 'normal' }}
        >
          Breakfast
        </button>
        <button
          onClick={() => setSelectedMealType('lunch')}
          style={{ fontWeight: selectedMealType === 'lunch' ? 'bold' : 'normal' }}
        >
          Lunch
        </button>
        <button
          onClick={() => setSelectedMealType('dinner')}
          style={{ fontWeight: selectedMealType === 'dinner' ? 'bold' : 'normal' }}
        >
          Dinner
        </button>
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes available for {selectedMealType}.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onAddToMealPlan={onAddToMealPlan}
            meal={selectedMealType}
          />
        ))
      )}
    </div>
  );
}

export default RecipeBook;

