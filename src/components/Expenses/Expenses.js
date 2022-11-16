import React, { useState } from 'react'
import './Expenses.css'
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'


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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList expenseList = {filteredExpenses} />
        </Card>
    )
}

export default Expenses