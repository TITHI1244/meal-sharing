import React from "react";
import { Link } from "react-router-dom";

function MealDetails({ id, title, description, location, price, imageSrc }) {
  return (
    <Link to={`/meal/${id}`}>
      <div className="card">
        <img src={imageSrc} alt="meal" />
        <button>Dkk {price}</button>
        <div className="meal-details">
          <h3>{title}</h3>
          <p>---{description}</p>
          <h3>
            Enjoy the meal in <div className="colored-location">{location}</div>
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default MealDetails;
