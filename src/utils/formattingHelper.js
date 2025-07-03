import { Units, IngTypes } from './enums';
import matchIng from './matchIng';

function format(combinedIngredients, compType){
    const formattedIng = [];
    combinedIngredients.forEach(({name, unit, quantity}) => {
        const ingInfo = matchIng(name, unit);
        if(ingInfo.type === compType){
            let newUnit = unit;
            let newName = name.toLowerCase();
            if(unit === Units.PC){
                newUnit = "";
                if(Number(quantity) > 1){
                    newName += "s";
                }
            }else if(Number(quantity) > 1){
                newUnit += "s";
            }
            formattedIng.push({name: newName, unit: newUnit, quantity});
        }
    })
    return formattedIng;
}

export default format;