import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter'


const Expenses = (props) => {

    const [filteredYear, setYear] = useState('2019');

    const filterChoiceHandler = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No Expenses Found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                filterChoiceHandler={filterChoiceHandler}
            />
            <ExpenseList expenseList = {filteredExpenses} />
        </Card>
    )
}

export default Expenses