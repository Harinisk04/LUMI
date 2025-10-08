import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function NewItem(){
  const [type, setType] = useState('task');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await api.post('/items', { type, title, content });
      navigate('/activities');
    } catch (err){ console.error(err); }
  }

  return (
    <div>
      <h3 style={{color:'#6f42c1'}}>New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Type</label>
          <select className="form-select" value={type} onChange={e=>setType(e.target.value)}>
            <option value="task">Task</option>
            <option value="note">Note</option>
            <option value="habit">Habit</option>
            <option value="expense">Expense</option>
            <option value="event">Event</option>
          </select>
        </div>
        <div className="mb-2">
          <label>Title</label>
          <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} required/>
        </div>
        <div className="mb-2">
          <label>Content</label>
          <textarea className="form-control" value={content} onChange={e=>setContent(e.target.value)}/>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
