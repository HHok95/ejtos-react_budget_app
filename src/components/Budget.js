import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [currBudget, setCurrBudget] = useState(budget);
    const prevBudgetRef = useRef(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChangeBudget = (cost) => {
        const parsedCost = parseInt(cost, 10);

        if (parsedCost < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setCurrBudget(prevBudgetRef.current);
            return;
        } else if (parsedCost > 20000) {
            alert(`The value cannot exceed  ${currency}20,000`);
            setCurrBudget(prevBudgetRef.current);
            return;
        } else {
            setCurrBudget(parsedCost);
            dispatch({
                type: 'SET_BUDGET',
                payload: parsedCost,
            });
            prevBudgetRef.current = currBudget;
        }
    };

    const handleBudgetChange = (e) => {
        setCurrBudget(e.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                    type="number" 
                    step="10" 
                    value={currBudget} 
                    onChange={handleBudgetChange}
                    onBlur={() => handleChangeBudget(currBudget)}
                />
            </span>
        </div>
    );
};
export default Budget;