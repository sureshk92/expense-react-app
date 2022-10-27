import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({ 
  //   enteredTitle: '', enteredAmount: '', enteredDate:'' });


  const titleTextHandler = (event) => {
    setEnteredTitle(event.target.value);
    //console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // console.log(event.target.value);
  }
  const amountTextHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    // console.log(event.target.value);
  }
  const dateTextHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    // console.log(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleTextHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountTextHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2022-10-26" max="2023-11-20" value={enteredDate} onChange={dateTextHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
