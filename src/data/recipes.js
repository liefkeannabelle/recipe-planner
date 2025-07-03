import { Units, MealTypes, Tags } from '../utils/enums.js';
/* TEMPLATE
  {
    id: 'increment',
    name: "",
    ingredients: [
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
      { name: "", quantity: , unit: Units. },
    ],
    servings: ,
    description: "",
    mealType: [],
    tags: []
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
    mealType: [MealTypes.D, MealTypes.L],
    tags: [Tags.MP]
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
    mealType: [MealTypes.D, MealTypes.L],
    tags: []
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
    mealType: [MealTypes.BF],
    tags: [Tags.SV]
  },
  {
    id: '4',
    name: "Chocolate Raspberry Oats",
    ingredients: [
      { name: "Oatmeal", quantity: 6, unit: Units.SRV },
      { name: "Granola", quantity: 6, unit: Units.SRV },
      { name: "Raspberries", quantity: 2, unit: Units.PT },
      { name: "Dark Chocolate", quantity: 6, unit: Units.SRV },
      { name: "Almond Milk", quantity: 6, unit: Units.SRV},
      { name: "Yogurt", quantity: 6, unit: Units.SRV},
      { name: "Maple Syrup", quantity: 6, unit: Units.TBSP}
    ],
    servings: 6,
    description: "Oats with rasperries, dark chocolate, yogurt, and granola.",
    mealType: [MealTypes.BF],
    tags: [Tags.SW]
  },
    {
    id: '5',
    name: "Avocado Rice Cake",
    ingredients: [
      { name: "Avocado", quantity: 3, unit: Units.PC },
      { name: "Rice Cake", quantity: 12, unit: Units.PC },
      { name: "Egg", quantity: 12, unit: Units.PC },
      { name: "Strawberries", quantity: 1, unit: Units.LB },
    ],
    servings: 6,
    description: "Soft-boiled eggs on avocado rice cakes with fruit.",
    mealType: [MealTypes.BF],
    tags: [Tags.SV]
  }, 
    {
    id: '6',
    name: "Berry Yogurt Bowl",
    ingredients: [
      { name: "Frozen Mixed Berries", quantity: 1, unit: Units.CNTR },
      { name: "Yogurt", quantity: 2, unit: Units.CNTR },
      { name: "Rice Cake", quantity: 6, unit: Units.PC },
      { name: "Egg", quantity: 12, unit: Units.PC },
    ],
    servings: 6,
    description: "Mixed berry yogurt bowl with soft-boiled eggs.",
    mealType: [MealTypes.BF],
    tags: [Tags.SW]
  },
    {
    id: '7',
    name: "Sausage, Peppers, and Onions",
    ingredients: [
      { name: "Smoked Sausage", quantity: 10, unit: Units.PC },
      { name: "Bell Pepper", quantity: 2, unit: Units.PC },
      { name: "Onion", quantity: 1, unit: Units.PC }
    ],
    servings: 6,
    description: "Sausages sauteed with peppers and onions.",
    mealType: [MealTypes.D],
    tags: [Tags.MP]
  }
];

export default recipes;
