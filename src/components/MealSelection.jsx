import React from 'react';

function MealSelection({ recipes, mealPlan, onSetMeal }) {
    const renderSelect = (label, mealKey) => (
        <div>
            <label>{label}:</label>
                <select
                    value={mealPlan[mealKey] || ''}
                    onChange={e => onSetMeal(mealKey, e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {recipes.map(r => (
                        <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                </select>
        </div>
    );

    return (
        <div>
            <h2>📝 Selected meals for the week: </h2>
            {renderSelect('Breakfast', 'breakfast')}
            {renderSelect('Lunch', 'lunch')}
            {renderSelect('Dinner', 'dinner')}
        </div>
    );
}

export default MealSelection;

