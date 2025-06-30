import { Units } from './enums.js';

const sampleRecipes = [
  {
    id: 1,
    name: "Beef Bulgogi Bowls",
    ingredients: [
      { name: "Ground Beef", quantity: 2, unit: Units.LBS },
      { name: "Carrots", quantity: 1, unit: Units.PCS},
      { name: "Green Onion", quantity: 1, unit: Units.CNTR },
      { name: "Cauliflower Rice", quantity: 2, unit: Units.CNTR },
    ],
    instructions: "Brown beef. Add sauce and finely sliced carrots. Reheat over cauliflower rice.",
    tags: ["asia", "bowl", "beef"], //come back and enum tag categories (region, format, protein)
  }
];

export default sampleRecipes;
