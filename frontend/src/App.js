import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Activities from './pages/Activities';
import NewItem from './pages/NewItem';
import EditItem from './pages/EditItem';

export default function App(){
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#f7f3ff'}}>
        <div className="container">
          <Link className="navbar-brand" to="/">Lumi</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/new">New</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/new" element={<NewItem/>}/>
          <Route path="/edit/:id" element={<EditItem/>}/>
        </Routes>
      </div>
    </Router>
  );
}
