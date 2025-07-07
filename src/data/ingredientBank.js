import { Units, IngTypes } from '../utils/enums.js';

/* TEMPLATE
    {name: "", unit: Units., calories: , protein: }
*/
const ingredientBank = [
    // MEATS
    {name: "Chicken Breakfast Sausage", type: IngTypes.M, unit: Units.PC, calories: 30, protein: 4.5},
    {name: "Chicken Thigh", type: IngTypes.M, unit: Units.LB, calories: 567, protein: 89},
    {name: "Ground Beef", type: IngTypes.M, unit: Units.LB, calories: 690, protein: 96},
    {name: "Ground Turkey", type: IngTypes.M, unit: Units.LB, calories: 640, protein: 96},
    {name: "Spicy Chicken Sausage", type: IngTypes.M, unit: Units.PC, calories: 140, protein: 17},
    //DAIRY/EGGS
    {name: "Almond Milk", type: IngTypes.DE, unit: Units.SRV, calories: 30, protein: 1},
    {name: "Egg", type: IngTypes.DE, unit: Units.PC, calories: 90, protein: 8},
    {name: "Yogurt", type: IngTypes.DE, unit: Units.SRV, calories: 120, protein: 17},
    //CARBS/STARCHES
    {name: "Baby Potatoes", type: IngTypes.P, unit: Units.CNTR, calories: 840, protein: 24},
    {name: "Breadcrumbs", type: IngTypes.CS, unit: Units.CUP, calories: 400, protein: 0},
    {name: "Cauliflower Rice", type: IngTypes.CS, unit: Units.CNTR, calories: 90, protein: 9},
    {name: "Frozen Corn", type: IngTypes.CS, unit: Units.CNTR, calories: 300, protein: 0},
    {name: "Granola", type: IngTypes.CS, unit: Units.SRV, calories: 150, protein: 0},
    {name: "Oatmeal", type: IngTypes.CS, unit: Units.SRV, calories: 170, protein: 0},
    {name: "Pita", type: IngTypes.CS, unit: Units.SRV, calories: 100, protein: 1},
    {name: "Rice Cake", type: IngTypes.CS, unit: Units.PC, calories: 50, protein: 0},
    //PRODUCE
    {name: "Avocado", type: IngTypes.P, unit: Units.PC, calories: 150, protein: 0},
    {name: "Bell Pepper", type: IngTypes.P, unit: Units.PC, calories: 100, protein: 0},
    {name: "Black Beans", type: IngTypes.P, unit: Units.CNTR, calories: 300, protein: 5},
    {name: "Carrot", type: IngTypes.P, unit: Units.PC, calories: 50, protein: 0},
    {name: "Cucumber", type: IngTypes.P, unit: Units.PC, calories: 50, protein: 0},
    {name: "Frozen Mixed Berries", type: IngTypes.P, unit: Units.CNTR, calories: 240, protein: 0},
    {name: "Green Onion", type: IngTypes.P, unit: Units.CNTR, calories: 30, protein: 0},
    {name: "Greens", type: IngTypes.P, unit: Units.CNTR, calories: 50, protein: 0},
    {name: "Kiwi", type: IngTypes.P, unit: Units.PC, calories: 45, protein: 0},
    {name: "Lemon", type: IngTypes.P, unit: Units.PC, calories: 20, protein: 1},
    {name: "Onion", type: IngTypes.P, unit: Units.PC, calories: 150, protein: 0},
    {name: "Raspberries", type: IngTypes.P, unit: Units.PT, calories: 150, protein: 0},
    {name: "Strawberries", type: IngTypes.P, unit: Units.LB, calories: 150, protein: 0},
    //OTHER
    {name: "Bulgogi Sauce", type: IngTypes.O, unit: Units.SRV, calories: 35, protein: 0},
    {name: "Dark Chocolate", type: IngTypes.O, unit: Units.SRV, calories: 50, protein: 0},
    {name: "Dill", type: IngTypes.O, unit: Units.CNTR, calories: 10, protein: 0},
    {name: "Maple Syrup", type: IngTypes.O, unit: Units.TBSP, calories: 90, protein: 0},
    {name: "Plant-Based Queso", type: IngTypes.O, unit: Units.CNTR, calories: 300, protein: 10},
    {name: "Chocolate Powdered Peanut Butter", type: IngTypes.O, unit: Units.SRV, calories: 70, protein: 6}
];


export default ingredientBank;