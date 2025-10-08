import React from 'react';
export default function Dashboard(){
  return (
    <div>
      <h2 style={{color:'#7b61ff'}}>Welcome to Lumi</h2>
      <p>Your personal utility app — tasks, habits, notes, expenses and events in one place.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-3" style={{borderRadius:12}}>
            <h5>Quick Actions</h5>
            <ul>
              <li>New Task</li>
              <li>Log Expense</li>
              <li>Add Note</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3 mb-3" style={{borderRadius:12}}>
            <h5>Overview</h5>
            <p>Use Activities to manage modules.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
