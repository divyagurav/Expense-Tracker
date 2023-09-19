import ExpenseList from "./ExpenseList";
import classes from "./Expenses.module.css";
import React, { useRef, useState } from "react";
const Expenses = () => {
  const moneyInputRef = useRef("");
  const descriptionInputRef = useRef("");
  const categoryInputRef = useRef("");
  const [expenses, setExpenses] = useState([]);

  const submithandler = (event) => {
    event.preventDefault();

    // const formData = {
    //   money: moneyInputRef.current.value,
    //   description: descriptionInputRef.current.value,
    //   category: categoryInputRef.current.value,
    // };
    setExpenses((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          money: moneyInputRef.current.value,
          description: descriptionInputRef.current.value,
          category: categoryInputRef.current.value,
        },
      ];
    });
  };
  return (
    <div>
      <div className={classes.header}>
        <h3>Day to Day Expenses</h3>
      </div>
      <div className={classes.expense}>
        <section>
          <form onSubmit={submithandler}>
            <div>
              <label htmlFor="money">Money Spent:</label>
              <input type="number" ref={moneyInputRef}></input>
            </div>
            <div>
              <label>Description:</label>
              <input htmlFor="text" ref={descriptionInputRef}></input>
            </div>
            <div>
              <label htmlFor="expense">Category:</label>
              <select name="expense" ref={categoryInputRef}>
                <option value="food">Food</option>
                <option value="petrol">Petrol</option>
                <option value="salary">salary</option>
              </select>
            </div>
            <br></br>
            <button type="submit">Add</button>
          </form>
        </section>
      </div>

      <ExpenseList items={expenses}></ExpenseList>
    </div>
  );
};

export default Expenses;
