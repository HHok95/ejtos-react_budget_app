import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <select 
              id="currency-dropdown" 
              className="form-select form-select-sm" 
              defaultValue={currency} 
              onChange={handleCurrencyChange}
            >
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencyList;