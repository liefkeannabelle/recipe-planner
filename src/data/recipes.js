import { Units } from '../utils/enums.js';
/* TEMPLATE
  {
    id: increment,
    name: "",
    ingredients: [
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units.},
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
    ],
    servings: 
  }
*/

const recipes = [
  {
    id: '1',
    name: "Beef Bulgogi Bowls",
    ingredients: [
      { name: "Ground Beef", quantity: 2, unit: Units.LBS },
      { name: "Carrots", quantity: 1, unit: Units.PCS},
      { name: "Green Onion", quantity: 1, unit: Units.CNTR },
      { name: "Cauliflower Rice", quantity: 2, unit: Units.CNTR },
      { name: "Bulgogi Sauce", quantity: 12, units: Units.SRV }
    ],
    servings: 6
  },
  {
    id: '2',
    name: "Taco Salad Bowls",
    ingredients: [
      { name: "Chicken Thigh", quantity: 2, unit: Units.LBS },
      { name: "Greens", quantity: 1, unit: Units.CNTR},
      { name: "Frozen Corn", quantity: 1, unit: Units.CNTR },
      { name: "Black Beans", quantity: 2, unit: Units.CNTR },
      { name: "Plant-Based Queso", quantity: 1, unit: Units.CNTR},
      { name: "Avocado", quantity: 3, unit: Units.PCS}
    ],
    servings: 6
  },
    {
    id: '3',
    name: "Breakfast Plate",
    ingredients: [
      { name: "Eggs", quantity: 12, unit: Units.PCS },
      { name: "Chicken Breakfast Sausage", quantity: 12, unit: Units.PCS},
      { name: "Strawberries", quantity: 2, unit: Units.LBS },
      { name: "Kiwis", quantity: 6, unit: Units.PCS },
    ],
    servings: 6
  }
];

export default recipes;
