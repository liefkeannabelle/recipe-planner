import { Units } from '../utils/enums';

function makeReadable(combinedIngredients){
    const pluralCombIng = [];
    combinedIngredients.forEach(({name, quantity, unit}) => {
        let newUnit = unit;
        if(unit === Units.PC){
            newUnit = "";
        }else if(Number(quantity) > 1){
            newUnit += "s";
        }
        pluralCombIng.push({name, quantity, unit: newUnit});
    })
    return pluralCombIng;
}

export default makeReadable;