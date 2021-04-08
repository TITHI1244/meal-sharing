import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Meal from "./Meal";
import Meals from "./Meals";
import Navigation from "./Nav";

function App() {
  const [meals, setMeals] = useState([]);
  const getAllMeals = () => {
    fetch("http://localhost:3000/api/meals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  };
  useEffect(() => {
    getAllMeals();
  }, []);
  return (
    <div>
      <Navigation />
      <Header />
      <Router>
        <Route exact path="/">
          <Home meals={meals} />
        </Route>
        <Route path="/meals">
          <Meals meals={meals} />
        </Route>
        <Route path="/meal/:id">
          <Meal meals={meals} />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
