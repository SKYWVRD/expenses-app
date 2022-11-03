import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
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

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
