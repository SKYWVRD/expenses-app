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
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
        </Card>
    )
}

export default Expenses