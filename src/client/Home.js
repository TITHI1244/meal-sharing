import React from "react";
import HomeBackground from "./HomeBackground";
import ReviewSlide from "./ReviewSlide";

const Home = ({ meals, reviews }) => {
  return (
    <HomeBackground>
      <div className="home">
        <div>
          <h1>Check out our best rated meals here</h1>
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                <h4>{meal.title}</h4>
                <p>--{meal.description}</p>
                <hr className="meals-border" />
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <h1>Check out some of the reviews here</h1>
          <div id="reviews">
            <ReviewSlide reviews={reviews} />
          </div>
        </div>
      </div>
    </HomeBackground>
  );
};

export default Home;
