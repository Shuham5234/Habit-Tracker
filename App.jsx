import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddHabit from './AddHabit.jsx';
import HabitList from './HabitList.jsx';

const App = () => (
  <Router>
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<AddHabit />} />
        <Route path="/habits" element={<HabitList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
