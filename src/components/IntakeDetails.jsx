import React from 'react';
import { calculateMacros } from '../utils/calculateMacros';

function IntakeDetails({ selectedRecipes }) {
    const macros = calculateMacros(selectedRecipes);
    const totalCals = Object.values(macros).reduce((sum, meal) => sum + meal.calories, 0);
    const totalPro = Object.values(macros).reduce((sum, meal) => sum + meal.protein, 0);

    return (
        <div>
        <h2>🍽️ Intake Details</h2>
        {selectedRecipes.length === 0 ? (
            <p>No meals selected yet.</p>
        ) : (
            <ul>
                {Object.entries(macros).map(([meal, { calories, protein }]) => (
                    <li key={meal}>
                        <strong>{meal.charAt(0).toUpperCase() + meal.slice(1)}:</strong>{' '}
                        {calories} cal, {protein}g protein
                    </li>
                ))}
                <li> <strong>Total: </strong> {totalCals} cal, {totalPro}g protein </li>
            </ul>
        )}
        </div>
    );

}

export default IntakeDetails;