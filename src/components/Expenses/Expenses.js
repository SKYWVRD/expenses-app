import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter'


const Expenses = (props) => {

    const [filteredYear, setYear] = useState('2019');

    const filterChoiceHandler = (selectedYear) => {
        setYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} filterChoiceHandler={filterChoiceHandler} />
            {props.items
            .filter(expense => expense.date.getFullYear().toString() === filteredYear)            
            .map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses