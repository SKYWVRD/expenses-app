import React, { useState } from 'react'
import './Expenses.css'
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