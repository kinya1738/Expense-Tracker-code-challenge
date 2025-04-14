import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTable from './components/ExpenseTable'
import ExpenseForm from './components/ExpenseForm'
import SearchBar from './components/SearchBar'

function App() {
  const [expenses, setExpenses] = useState([]);
const [search, setSearch] = useState("");

const addExpense = (newExpense) => {
  setExpenses([...expenses, newExpense]);
};

const filteredExpenses = expenses.filter((expense) =>
  expense.description.toLowerCase().includes(search.toLowerCase())
);
const [count, setCount] = useState(0)


  return (
    <>
    <div className="card">
  <h2>Expense Tracker</h2>
      <SearchBar search={search} setSearch={setSearch}/>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
</div>
   </>
  )
}

export default App
