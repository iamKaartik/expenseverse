import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <p className="expenses-list__fallback">NO LIST ITEMS</p>;
  return (
    <ul className="expense-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpenseList;
