import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {

  const saveExpenseDataForm = (enteredExpenseData) => {
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataForm}/>
    </div>
  );
};

export default NewExpense;
