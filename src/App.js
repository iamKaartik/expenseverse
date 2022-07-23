import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import React, { useState } from "react";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const DummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, addExpenses] = useState(DummyData);
  function onDataReceiveHandler(NewExpenseData) {
    addExpenses(() => {
      return [NewExpenseData, ...expenses];
    });
  }

  const [filterDate, setFilterDate] = useState("2021");
  const onFilterChangeHandler = (FDate) => {
    setFilterDate(FDate);
  };

  const DataFilter = expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterDate;
  });
  return (
    <div>
      <div className="container">
        <NewExpense onDataRecieve={onDataReceiveHandler}></NewExpense>
        <ExpenseChart items={DataFilter}></ExpenseChart>
        <ExpensesFilter onFilterChange={onFilterChangeHandler}></ExpensesFilter>
        <ExpenseList items={DataFilter}></ExpenseList>
      </div>
    </div>
  );
}

export default App;
