//returns a jsx code
import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
