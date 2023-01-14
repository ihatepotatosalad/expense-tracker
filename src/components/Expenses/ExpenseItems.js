import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItems = (props) => {
  const [year, setYear] = useState("2022");

  const onYearChange = (year) => {
    setYear(year);
  };

  const newList = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  const mappedList = newList.map((i, id) => {
    return (
      <ExpenseItem key={id} title={i.title} amount={i.amount} date={i.date} />
    );
  });
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={onYearChange} selectedYear={year} />
      <ExpensesChart expenses={newList} />
      <ExpensesList mappedList={mappedList} />
    </Card>
  );
};

export default ExpenseItems;
