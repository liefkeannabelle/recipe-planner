import { Units, IngTypes } from '../utils/enums.js';

/* TEMPLATE
    {name: "", unit: Units., calories: , protein: }
*/
const ingredientBank = [
    // MEATS
    {name: "Chicken Breakfast Sausage", type: IngTypes.M, unit: Units.PC, calories: 30, protein: 4.5},
    {name: "Chicken Thigh", type: IngTypes.M, unit: Units.LB, calories: 567, protein: 89},
    {name: "Ground Beef", type: IngTypes.M, unit: Units.LB, calories: 690, protein: 96},
    //DAIRY/EGGS
    {name: "Eggs", type: IngTypes.DE, unit: Units.PC, calories: 90, protein: 8},
    //CARBS/STARCHES
    {name: "Cauliflower Rice", type: IngTypes.CS, unit: Units.CNTR, calories: 90, protein: 9},
    {name: "Frozen Corn", type: IngTypes.CS, unit: Units.CNTR, calories: 300, protein: 0},
    //PRODUCE
    {name: "Avocado", type: IngTypes.P, unit: Units.PC, calories: 150, protein: 0},
    {name: "Black Beans", type: IngTypes.P, unit: Units.CNTR, calories: 300, protein: 5},
    {name: "Carrot", type: IngTypes.P, unit: Units.PC, calories: 50, protein: 0},
    {name: "Green Onion", type: IngTypes.P, unit: Units.CNTR, calories: 30, protein: 0},
    {name: "Greens", type: IngTypes.P, unit: Units.CNTR, calories: 50, protein: 0},
    {name: "Kiwis", type: IngTypes.P, unit: Units.PC, calories: 45, protein: 0},
    {name: "Strawberries", type: IngTypes.P, unit: Units.LB, calories: 150, protein: 0},
    //OTHER
    {name: "Bulgogi Sauce", type: IngTypes.O, unit: Units.SRV, calories: 35, protein: 0},
    {name: "Plant-Based Queso", type: IngTypes.O, unit: Units.CNTR, calories: 300, protein: 10}
];

export default ingredientBank;