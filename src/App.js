import React, { useState, useEffect } from 'react';
import recipesData from './data/recipes.js';
import GroceryList from './components/GroceryList';
import IntakeDetails from './components/IntakeDetails.jsx';
import RecipeBook from './components/RecipeBook.jsx';

function App() {
  // mealPlan = IDs of the user's selected meals
  const [mealPlan, setMealPlan] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
  });

  useEffect(() => {
    const savedMealPlan = JSON.parse(localStorage.getItem('mealPlan')) || {
      breakfast: '',
      lunch: '',
      dinner: '',
    };
    setMealPlan(savedMealPlan);
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  const handleSetMeal = (slot, recipeId) => {
    setMealPlan({ ...mealPlan, [slot]: recipeId });
  };

  // selectedRecipes = the recipe data of the selected recipes
  const selectedRecipes = {
    breakfast: recipesData.find(r => r.id === mealPlan.breakfast),
    lunch: recipesData.find(r => r.id === mealPlan.lunch),
    dinner: recipesData.find(r => r.id === mealPlan.dinner),
  };

  return (
    <div className="App">
      <h1>🧾 Recipe Planner</h1>

      <hr />

      <RecipeBook
        recipes={recipesData}
        onAddToMealPlan={handleSetMeal}
      />

      <hr />

      <IntakeDetails
        selectedRecipes={selectedRecipes}
      />

      <hr />

      <GroceryList
        recipes={recipesData}
        mealPlan={mealPlan}
      />
    </div>
  );
}

export default App;



