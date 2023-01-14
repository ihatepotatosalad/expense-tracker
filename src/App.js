import { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 20),
    },
    {
      title: "expense 2",
      amount: 500.37,
      date: new Date(2021, 6, 22),
    },
    {
      title: "expense 3",
      amount: 100.2,
      date: new Date(2020, 1, 10),
    },
    {
      title: "expense 4",
      amount: 120.37,
      date: new Date(2021, 9, 30),
    },
  ]);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prev) => {
      return [...prev, expenseData];
    });
  };
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <ExpenseItems expenses={expenses} />
    </div>
  );
}

export default App;
