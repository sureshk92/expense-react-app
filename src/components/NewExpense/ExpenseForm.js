import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
const titleTextHandler = (event) => {
  console.log(event.target.value);
}
  return <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleTextHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2022-10-26" max="2023-11-20"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
      </form>
};

export default ExpenseForm;
