import React, { useState } from "react";
import { Link } from "react-router-dom";
import MealDetails from "./MealDetails";

const Meals = ({ meals }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);
  const date = new Date().toDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const showForm = () => {
    setDisplayForm(true);
  };
  return (
    <div>
      <ul className="meal-cards">
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealDetails
              id={meal.id}
              title={meal.title}
              description={meal.description}
              location={meal.location}
              max_reservations={meal.max_reservations}
              price={meal.price}
              imageSrc={meal.image}
            />
          </li>
        ))}
      </ul>
      {displayForm ? (
        <div className="add-meal-form">
          <p className="center-aligned-text">Today: {date}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-flex">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="location">Contact name</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="time">When</label>
              <input
                type="datetime-local"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="max_reservations">Max. reservations</label>
              <input
                type="number"
                id="max_reservations"
                value={reservations}
                onChange={(e) => setReservations(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="price">When</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type="submit">Add a new meal</button>
          </form>
        </div>
      ) : (
        <div className="meals-btn">
          <button onClick={showForm}>Become a host</button>
        </div>
      )}
      <Link to="/">
        <div className="back-btn">
          <button>Back to homepage</button>{" "}
        </div>
      </Link>
    </div>
  );
};

export default Meals;
