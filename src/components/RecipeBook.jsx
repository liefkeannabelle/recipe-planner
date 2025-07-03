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
        <div style={{ display: 'flex', cursor: 'pointer' }}>
            <div 
                onClick={() => setSelectedMealType('breakfast')} 
                style={{ 
                    marginRight: 10 ,
                    fontWeight: selectedMealType === 'breakfast' ? 'bold' : 'normal',
                    borderBottom: selectedMealType === 'breakfast' ? '2px solid blue' : '1px solid blue',
                    marginBottom: 10
                }}
            >Breakfast
            </div>
            <div 
                onClick={() => setSelectedMealType('lunch')} 
                style={{ 
                    marginRight: 10,
                    fontWeight: selectedMealType === 'lunch' ? 'bold' : 'normal',
                    borderBottom: selectedMealType === 'lunch' ? '2px solid blue' : '1px solid blue',
                    marginBottom: 10
                }}
            >Lunch
            </div>
            <div 
                onClick={() => setSelectedMealType('dinner')}
                style={{ 
                    fontWeight: selectedMealType === 'dinner' ? 'bold' : 'normal',
                    borderBottom: selectedMealType === 'dinner' ? '2px solid blue' : '1px solid blue',
                    marginBottom: 10
                }}
            >Dinner
            </div>
        </div>
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes available for {selectedMealType}.</p>
      ) : (
          <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px',
                marginTop: '16px'
            }}
        > {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onAddToMealPlan={onAddToMealPlan}
            meal={selectedMealType}
          />
        ))}
        </div>
      )}
    </div>
  );
}

export default RecipeBook;

