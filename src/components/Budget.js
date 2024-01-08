import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, spending } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [selectedCurrency, setSelectedCurrency] = useState('GBP'); // Default currency is Pound (£)

  const handleBudgetChange = (event) => {
    const updatedBudget = parseInt(event.target.value, 10);

    // Check if the updatedBudget is lower than the spending
    if (updatedBudget < spending) {
      // Alert the user
      alert("You cannot reduce the budget lower than spend");
    } else if (updatedBudget > 20000) {
      // Check if the updatedBudget exceeds the upper limit (20,000)
      // Alert the user
      alert("Budget cannot exceed £20,000");
    } else {
      // Update the budget if within the limit
      setNewBudget(updatedBudget);
    }
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {selectedCurrency === 'USD' && '$'}
                      {selectedCurrency === 'GBP' && '£'}
                      {selectedCurrency === 'EUR' && '€'}
                      {selectedCurrency === 'INR' && '₹'}
                      {budget}
      </span>
      <span>Spending: £{spending}</span>
      <div className="input-group" style={{ marginTop: '10px' }}>
        <div className="input-group-prepend">
          <select className="custom-select" onChange={handleCurrencyChange}>
            <option value="USD">Dollar ($)</option>
            <option value="GBP">Pound (£)</option>
            <option value="EUR">Euro (€)</option>
            <option value="INR">Rupee (₹)</option>
          </select>
        </div>
        <input
          type="number"
          step="10"
          max="20000"
          min="2000" // Set the upper limit to 20,000
          value={newBudget}
          onChange={handleBudgetChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default Budget;
