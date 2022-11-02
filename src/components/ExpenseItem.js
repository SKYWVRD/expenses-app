import './ExpenseItem.css'

function ExpenseItem() {

    return (
        <div className="expense-item">
            <h2>March 28th 2022</h2>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$420.69</div>
            </div>
        </div>
    )
}

export default ExpenseItem