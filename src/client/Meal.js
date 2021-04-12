import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Meal({ meals }) {
  const [guests, setGuests] = useState(1);
  const date = new Date().toDateString();
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reservation, setReservation] = useState({});
  const [displayForm, setDisplayForm] = useState(false);
  const params = useParams();
  console.log(params);
  const meal = meals.filter((meal) => meal.id === Number(params.id))[0];
  useEffect(() => {
    console.log(reservation);
    fetch("http://localhost:3000/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [reservation]);
  const showForm = () => {
    setDisplayForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      number_of_guests: guests,
      meal_id: Number(params.id),
      created_date: date,
      contact_phonenumber: contact,
      contact_name: name,
      contact_email: email,
    };
    setReservation(newReservation);
    console.log(reservation);
  };
  return (
    <div>
      <div className="meal-detail">
        <div>
          <img src={meal.image} />
        </div>
        <div>
          <h2>{meal.title}</h2>
          <h3>---{meal.description}</h3>
          <h3>Location: {meal.location}</h3>
          <h3>Maximum reservations: {meal.max_reservations}</h3>
          <h3>Price: {meal.price}</h3>
        </div>
      </div>
      {displayForm ? (
        <div className="add-meal-form">
          <p className="center-aligned-text">Today: {date}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-flex">
              <label htmlFor="no_of_guests">Number of guests</label>
              <input
                type="number"
                min="1"
                id="no_of_guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="contact">Contact number</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="name">Contact name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label htmlFor="email">Contact email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit">Book seat</button>
          </form>
        </div>
      ) : (
        <div className="meal-btn">
          <button onClick={showForm}>Reserve seat</button>
        </div>
      )}
      <Link to="/">
        <div className="back-btn">
          <button>Back to homepage</button>{" "}
        </div>
      </Link>
    </div>
  );
}

export default Meal;
