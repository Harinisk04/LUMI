import React, { useEffect, useState } from "react";
import api from "../api";

export default function Activities() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("task");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const res = await api.get("/items");
    setItems(res.data);
  }

  async function handleAdd() {
    const newItem = { type, title };

    if (type === "task") newItem.description = description;
    if (type === "expense") {
      newItem.amount = Number(amount);
      newItem.category = category;
    }
    if (type === "note") {
      newItem.description = description;
      newItem.category = category;
    }
    if (type === "task") newItem.dueDate = dueDate;

    await api.post("/items", newItem);
    fetchItems();
    // reset form
    setTitle(""); setDescription(""); setAmount(""); setCategory(""); setDueDate("");
  }

  async function handleDelete(id) {
    await api.delete(`/items/${id}`);
    fetchItems();
  }

  return (
    <div className="container my-4">
      <h2 style={{ color: "#b09cd3ff" }}>Lumi - Personal Utility</h2>

      {/* Quick Add */}
      <div className="mb-3">
        <select className="form-select mb-2" value={type} onChange={e => setType(e.target.value)}>
          <option value="task">Task</option>
          <option value="expense">Expense</option>
          <option value="note">Note</option>
        </select>

        <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

        {type === "task" && (
          <>
            <input className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="date" className="form-control mb-2" value={dueDate} onChange={e => setDueDate(e.target.value)} />
          </>
        )}

        {type === "expense" && (
          <>
            <input type="number" className="form-control mb-2" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <input className="form-control mb-2" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          </>
        )}

        {type === "note" && (
          <>
            <input className="form-control mb-2" placeholder="Content" value={description} onChange={e => setDescription(e.target.value)} />
            <input className="form-control mb-2" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          </>
        )}

        <button className="btn btn-primary" onClick={handleAdd}>Add {type}</button>
      </div>

      {/* Items List */}
      {items.map(item => (
        <div key={item._id} className="card mb-2 p-2">
          <h5>{item.title} <span className="badge bg-secondary">{item.type}</span></h5>
          {item.description && <p>{item.description}</p>}
          {item.amount && <p>Amount: ₹{item.amount} | Category: {item.category}</p>}
          {item.dueDate && <p>Due: {new Date(item.dueDate).toLocaleDateString()}</p>}
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
