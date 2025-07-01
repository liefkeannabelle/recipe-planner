import ingredientBank from "../data/ingredientBank";

function matchIng(name, unit){
    const ingInfo = ingredientBank.find(ing => ing.name === name);
    
    if (!ingInfo) {
        console.warn(`Ingredient "${name}" not found in ingredient bank.`);
        return;
    }

    if (ingInfo.unit !== unit) {
        console.warn(`Unit mismatch for "${name}": recipe uses "${unit}", bank uses "${ingInfo.unit}"`);
        return;
    }
    return ingInfo;
}

export default matchIng;