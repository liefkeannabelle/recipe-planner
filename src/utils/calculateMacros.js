import matchIng from "./matchIng";

export function calculateMacros(selectedRecipes) {
  const macrosPerMeal = {};

  Object.entries(selectedRecipes).forEach(([meal, recipe]) => {
    if (!recipe || !Array.isArray(recipe.ingredients)) {
      macrosPerMeal[meal] = { calories: 0, protein: 0 };
      return;
    }

    let totalCalories = 0;
    let totalProtein = 0;

    recipe.ingredients.forEach(({ name, unit, quantity }) => {
      const ingInfo = matchIng(name, unit);

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
