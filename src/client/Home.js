import React from "react";

const Home = ({ meals }) => {
  return (
    <div>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <h4>{meal.title}</h4>
            <p>--{meal.description}.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
