import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const [displayForm, setDisplayForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString
        }

        props.onAddExpense(expenseData);
    }

    const displayFormHandler = (event) => {
        setDisplayForm(true);
    }

    const hideFormHandler = () => {
        setDisplayForm(false);
    }



    return (
        <div className='new-expense '>
            {
                displayForm === false ?
                    <button onClick={displayFormHandler}>Add New Expense</button>
                    : <ExpenseForm hideForm={hideFormHandler} onSaveExpenseDate={saveExpenseDataHandler} />
            }
        </div>
    )
}

export default NewExpense