import React, { useState } from "react";
import { Link } from "react-router-dom";

const Meals = ({ meals }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState(0);
  const [price, setPrice] = useState(0);
  const date = new Date().toDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <div>
        <p>Today: {date}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Contact name</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time">When</label>
            <input
              type="datetime-local"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="max_reservations">Maximum reservations</label>
            <input
              type="number"
              id="max_reservations"
              value={reservations}
              onChange={(e) => setReservations(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">When</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit">Save data</button>
        </form>
      </div>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <Link to={`/meal/${meal.id}`}>
              <h4>{meal.title}</h4>
            </Link>
            <p>--{meal.description}.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
