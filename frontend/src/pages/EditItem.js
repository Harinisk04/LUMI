import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export default function EditItem(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{ if(id) load(); }, [id]);

  async function load(){
    try {
      const res = await api.get(`/items/${id}`);
      setItem(res.data);
    } catch (err){ console.error(err); }
  }

  async function handleSave(e){
    e.preventDefault();
    try {
      await api.put(`/items/${id}`, item);
      navigate('/activities');
    } catch (err){ console.error(err); }
  }

  if(!item) return <p>Loading...</p>;
  return (
    <div>
      <h3>Edit</h3>
      <form onSubmit={handleSave}>
        <div className="mb-2">
          <label>Title</label>
          <input className="form-control" value={item.title||''} onChange={e=>setItem({...item, title:e.target.value})}/>
        </div>
        <div className="mb-2">
          <label>Content</label>
          <textarea className="form-control" value={item.content||''} onChange={e=>setItem({...item, content:e.target.value})}/>
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
