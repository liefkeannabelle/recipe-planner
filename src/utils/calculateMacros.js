import ingredientBank from "../data/ingredientBank";

export function calculateMacros(selectedRecipes) {
  const macrosPerMeal = {};

  Object.entries(selectedRecipes).forEach(([meal, recipe]) => {
    if (!recipe || !Array.isArray(recipe.ingredients)) {
      macrosPerMeal[meal] = { calories: 0, protein: 0 };
      return;
    }

    let totalCalories = 0;
    let totalProtein = 0;

    recipe.ingredients.forEach(({ name, quantity, unit }) => {
      const ingInfo = ingredientBank.find(ing => ing.name === name);
      if (!ingInfo) {
        console.warn(`Ingredient "${name}" not found in ingredient bank.`);
        return;
      }

      if (ingInfo.unit !== unit) {
        console.warn(`Unit mismatch for "${name}": recipe uses "${unit}", bank uses "${ingInfo.unit}"`);
        return;
      }

      totalCalories += (quantity * ingInfo.calories) / recipe.servings;
      totalProtein += (quantity * ingInfo.protein) / recipe.servings;
    });

    macrosPerMeal[meal] = {
      calories: Math.round(totalCalories),
      protein: Math.round(totalProtein),
    };
  });

  return macrosPerMeal;
}
