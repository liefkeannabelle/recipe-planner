import { Units, MealTypes } from '../utils/enums.js';
/* TEMPLATE
  {
    id: increment,
    name: "",
    ingredients: [
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
    ],
    servings: ,
    description: "",
    mealType: []
  }
*/

const recipes = [
  {
    id: '1',
    name: "Beef Bulgogi Bowls",
    ingredients: [
      { name: "Ground Beef", quantity: 2, unit: Units.LB },
      { name: "Carrot", quantity: 1, unit: Units.PC },
      { name: "Green Onion", quantity: 1, unit: Units.CNTR },
      { name: "Cauliflower Rice", quantity: 2, unit: Units.CNTR },
      { name: "Bulgogi Sauce", quantity: 12, unit: Units.SRV }
    ],
    servings: 6, 
    description: "Korean-inspired bowls with bulgogi beef and carrots over cauliflower rice.",
    mealType: [MealTypes.D, MealTypes.L]
  },
  {
    id: '2',
    name: "Taco Salad Bowls",
    ingredients: [
      { name: "Chicken Thigh", quantity: 2, unit: Units.LB },
      { name: "Greens", quantity: 1, unit: Units.CNTR },
      { name: "Frozen Corn", quantity: 1, unit: Units.CNTR },
      { name: "Black Beans", quantity: 2, unit: Units.CNTR },
      { name: "Plant-Based Queso", quantity: 1, unit: Units.CNTR},
      { name: "Avocado", quantity: 3, unit: Units.PC}
    ],
    servings: 6,
    description: "Taco-seasoned chicken over lettuce with corn, beans, and queso.",
    mealType: [MealTypes.D, MealTypes.L]
  },
    {
    id: '3',
    name: "Breakfast Plate",
    ingredients: [
      { name: "Eggs", quantity: 12, unit: Units.PC },
      { name: "Chicken Breakfast Sausage", quantity: 12, unit: Units.PC},
      { name: "Strawberries", quantity: 2, unit: Units.LB },
      { name: "Kiwis", quantity: 6, unit: Units.PC },
    ],
    servings: 6,
    description: "Eggs, chicken sausage, and fruit.",
    mealType: [MealTypes.BF]
    // breakfast: true,
    // lunch: false,
    // dinner: false
  }
];

export default recipes;
