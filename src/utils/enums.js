const Units = Object.freeze({
  CUP: 'cup',
  PC: 'piece',
  CNTR: 'container',
  LB: 'pound',
  TBSP: 'tbsp',
  TSP: 'tsp',
  G: 'gram', 
  SRV: 'serving',
  PT: 'pint'
});

const IngTypes = Object.freeze({
  M : 'meat',
  DE : 'dairy/eggs',
  CS : 'carb/starch',
  P : 'produce',
  O : 'other'
})

const MealTypes = Object.freeze({
  BF : 'breakfast',
  L : 'lunch',
  D : 'dinner'
})

const Tags = Object.freeze({
  SW : 'sweet',
  SV : 'savory',
  MP : 'meal prep'
})

export {Units, IngTypes, MealTypes, Tags}

