import React from 'react';
import { Link } from 'react-router-dom';

const HabitList = () => {
  const habits = JSON.parse(localStorage.getItem('habits')) || [];

  return (
    <div>
      <h3>Your Habits</h3>
      <ul className="list-group">
        {habits.map((habit, index) => (
          <li key={index} className="list-group-item">
            {habit.name}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">
        Add New Habit
      </Link>
    </div>
  );
};

export default HabitList;
