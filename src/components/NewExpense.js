import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseItemHandler = (NewExpenseData) => {
    props.onDataRecieve(NewExpenseData);
  };
  const [isEditing, setIsEditing] = useState(false);
  const onClickHandler = () => {
    setIsEditing(true);
  };
  const onCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onClickHandler}> Add Expenses </button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseItem={onSaveExpenseItemHandler}
          onCancel={onCancel}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
