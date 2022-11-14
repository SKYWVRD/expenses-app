import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_DATA = [
  {
    title: "Toilet Paper",
    amount: 420.69,
    date: new Date(2022, 2, 18)
  },
  {
    title: "Car Insurance",
    amount: 2602.19,
    date: new Date(2022, 3, 1)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
