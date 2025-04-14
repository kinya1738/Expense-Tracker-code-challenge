import { useState } from "react";
import "../App.css";



function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.category) return;
    const newExpense = {
      ...formData,
      id: Date.now(),
    };
    addExpense(newExpense);
    setFormData({ description: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
       <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="form-input"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
