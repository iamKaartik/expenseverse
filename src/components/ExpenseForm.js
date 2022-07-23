import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [items, setitems] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const onTitleChangeHandler = (events) => {
    setitems({
      ...items,
      title: events.target.value,
    });
  };
  const onAmountChangeHandler = (events) => {
    setitems({
      ...items,
      amount: events.target.value,
    });
  };
  const onDateChangeHandler = (events) => {
    setitems({
      ...items,
      date: new Date(events.target.value),
    });
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    props.onSaveExpenseItem(items);
    setitems({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={items.title}
            onChange={onTitleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={items.amount}
            step="0.01"
            onChange={onAmountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={items.date}
            min="2019-01-01"
            max="2022-01-01"
            onChange={onDateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
