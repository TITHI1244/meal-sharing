import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Meal from "./Meal";
import Meals from "./Meals";
import Navigation from "./Nav";
import ReviewSlide from "./ReviewSlide";

function App() {
  console.log("Inside app");
  const [meals, setMeals] = useState([]);
  const getAllMeals = () => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  };
  useEffect(() => {
    getAllMeals();
    getAllReviews();
  }, []);
  const [reviews, setReviews] = useState([]);
  const getAllReviews = () => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  };
  return (
    <div>
      <Router>
        <Navigation />
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home meals={meals} reviews={reviews} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/meals">
              <Meals meals={meals} />
            </Route>
            <Route path="/meal/:id">
              <Meal meals={meals} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
