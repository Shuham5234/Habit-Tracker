import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const AddHabit = () => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  );
  const [habit, setHabit] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habit.trim()) {
      alert('Habit name cannot be empty');
      return;
    }
    if (editIndex !== null) {
      const updatedHabits = [...habits];
      updatedHabits[editIndex].name = habit;
      updatedHabits[editIndex].description = description;
      setHabits(updatedHabits);
      setEditIndex(null);
    } else {
      setHabits([
        ...habits,
        {
          name: habit,
          description,
          status: {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
          },
        },
      ]);
    }
    setHabit('');
    setDescription('');
  };

  const removeHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  const editHabit = (index) => {
    setHabit(habits[index].name);
    setDescription(habits[index].description || '');
    setEditIndex(index);
  };

  return (
    <div>
      <h3>Add New Habit</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter habit name"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter habit description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? 'Save' : 'Add'}
        </button>
      </form>
      <ul className="list-group mt-3">
        {habits.map((habit, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{habit.name}</h5>
              <p>{habit.description}</p>
            </div>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => editHabit(index)}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeHabit(index)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddHabit;
