import React from "react";
import classes from "./ExpenseList.module.css";
const ExpenseList = (props) => {
  return (
    <div className={classes.expenseList}>
      {props.items.map((item) => (
        <ul>
          <li
            key={item.id}
          >{`${item.money}  ${item.description} ${item.category}`}</li>
        </ul>
      ))}
    </div>
  );
};
export default ExpenseList;
