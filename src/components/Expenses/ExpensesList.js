import React from "react";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let content = (
    <h2 className="expenses-list__fallback">No content here to display</h2>
  );

  if (props.mappedList.length > 0) {
    content = props.mappedList;
  }
  return <div>{content}</div>;
};

export default ExpensesList;
