import Expenses from './components/Expenses'

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
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
