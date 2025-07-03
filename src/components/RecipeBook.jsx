import React, { useState } from 'react';
import { MealTypes, Tags } from '../utils/enums';
import RecipeCard from './RecipeCard';
import MultiSelectDropdown from '../utils/selection';

function RecipeBook({ recipes, onAddToMealPlan }) {
    const [selectedMealType, setSelectedMealType] = useState('breakfast');
    const [selectedTags, setSelectedTags] = useState([]);
    const selectedValues = selectedTags.map(tag => tag.value);

    let filteredRecipes = recipes.filter(recipe => recipe.mealType.includes(selectedMealType));
    console.log("first filter: ", filteredRecipes);
        recipes.forEach(recipe => {
        console.log('Recipe:', recipe.name);
        console.log('Has all selected tags:', selectedValues.every(tag => recipe.tags.includes(tag)));
    });

    filteredRecipes = filteredRecipes.filter(recipe =>
         selectedValues.every(tag => recipe.tags.includes(tag))
    );

    console.log("second filter: ", filteredRecipes);

    return (
        <div>
        <h2>📚 Recipe Book</h2>
        <div>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                <div 
                    onClick={() => setSelectedMealType('breakfast')} 
                    style={{ 
                        marginRight: 10 ,
                        fontWeight: selectedMealType === 'breakfast' ? 'bold' : 'normal',
                        borderBottom: selectedMealType === 'breakfast' ? '2px solid blue' : '1px solid blue',
                        marginBottom: 10
                    }}
                >Breakfast
                </div>
                <div 
                    onClick={() => setSelectedMealType('lunch')} 
                    style={{ 
                        marginRight: 10,
                        fontWeight: selectedMealType === 'lunch' ? 'bold' : 'normal',
                        borderBottom: selectedMealType === 'lunch' ? '2px solid blue' : '1px solid blue',
                        marginBottom: 10
                    }}
                >Lunch
                </div>
                <div 
                    onClick={() => setSelectedMealType('dinner')}
                    style={{ 
                        fontWeight: selectedMealType === 'dinner' ? 'bold' : 'normal',
                        borderBottom: selectedMealType === 'dinner' ? '2px solid blue' : '1px solid blue',
                        marginBottom: 10
                    }}
                >Dinner
                </div>
            </div>
        </div>

        <MultiSelectDropdown onChange={setSelectedTags} />

        {filteredRecipes.length === 0 ? (
            <p>No recipes available for {selectedMealType}.</p>
        ) : (
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '16px',
                    marginTop: '16px'
                }}
            > {filteredRecipes.map(recipe => (
            <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onAddToMealPlan={onAddToMealPlan}
                meal={selectedMealType}
            />
            ))}
            </div>
        )}
        </div>
    );
}

export default RecipeBook;

