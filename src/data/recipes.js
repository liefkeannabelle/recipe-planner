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
    tags: [Tags.MP, Tags.BF, Tags.ASN, Tags.BWL, Tags.WRM]
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
    tags: [Tags.CHK, Tags.BWL, Tags.MEX, Tags.CLD]
  },
  {
    id: '3',
    name: "Breakfast Plate",
    ingredients: [
      { name: "Egg", quantity: 12, unit: Units.PC },
      { name: "Chicken Breakfast Sausage", quantity: 12, unit: Units.PC},
      { name: "Strawberries", quantity: 2, unit: Units.LB },
      { name: "Kiwi", quantity: 6, unit: Units.PC },
    ],
    servings: 6,
    description: "Eggs, chicken sausage, and fruit.",
    mealType: [MealTypes.BF],
    tags: [Tags.SV, Tags.WRM]
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
    tags: [Tags.SW, Tags.WRM, Tags.BWL]
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
    tags: [Tags.SV, Tags.CLD, Tags.HH]
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
    tags: [Tags.SW, Tags.CLD, Tags.BWL]
  },
    {
    id: '7',
    name: "Sausage, Peppers, and Onions",
    ingredients: [
      { name: "Spicy Chicken Sausage", quantity: 10, unit: Units.PC },
      { name: "Bell Pepper", quantity: 2, unit: Units.PC },
      { name: "Onion", quantity: 1.5, unit: Units.PC },
      { name: "Baby Potatoes", quantity: 2, unit: Units.CNTR}
    ],
    servings: 6,
    description: "Sausages sauteed with peppers and onions with roasted baby potatoes.",
    mealType: [MealTypes.L, MealTypes.D],
    tags: [Tags.MP, Tags.BWL, Tags.CHK, Tags.WRM]
  },
    {
    id: '8',
    name: "Mixed Berry Peanut Butter Oats",
    ingredients: [
      { name: "Oatmeal", quantity: 6, unit: Units.SRV },
      { name: "Yogurt", quantity: 6, unit: Units.SRV },
      { name: "Frozen Mixed Berries", quantity: 2, unit: Units.CNTR },
      { name: "Almond Milk", quantity: 3, unit: Units.SRV },
      { name: "Chocolate Powdered Peanut Butter", quantity: 6, unit: Units.SRV },
      { name: "Granola", quantity: 6, unit: Units.SRV}
    ],
    servings: 6,
    description: "Chocolate peanut butter oats topped with yogurt, berries, and granola.",
    mealType: [MealTypes.BF],
    tags: [Tags.BF, Tags.WRM, Tags.SW, Tags.BWL]
  },
    {
    id: '9',
    name: "Turkey Meatball Pita",
    ingredients: [
      { name: "Ground Turkey", quantity: 2, unit: Units.LB},
      { name: "Onion", quantity: 0.5, unit: Units.PC },
      { name: "Egg", quantity: 1, unit: Units.PC },
      { name: "Breadcrumbs", quantity: 1, unit: Units.CUP },
      { name: "Yogurt", quantity: 1, unit: Units.SRV},
      { name: "Dill", quantity: 1, unit: Units.CNTR},
      { name: "Greens", quantity: 1, unit: Units.CNTR},
      { name: "Cucumber", quantity: 1, unit: Units.PC},
      { name: "Pita", quantity: 6, unit: Units.SRV},
      { name: "Lemon", quantity: 1, unit: Units.PC}
    ],
    servings: 6,
    description: "Mediterranean turkey meatballs with tzatziki in a pita.",
    mealType: [MealTypes.D],
    tags: [Tags.HH, Tags.MED, Tags.TRKY]
  }
];

export default recipes;
