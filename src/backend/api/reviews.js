const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reviews, GET, endpoint: api/reviews/
router.get("/", async (request, response) => {
  try {
    const titles = await knex("review");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// Adds a new review, POST, endpoint: api/reviews/
router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    await knex("review").insert({
      title: request.body.title,
      description: request.body.description,
      meal_id: request.body.meal_id,
      stars: request.body.stars,
      created_date: request.body.created_date,
    });
    response.json(request.body);
  } catch (error) {
    throw error;
  }
});

// Returns review by id, GET, endpoint: api/reviews/2
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const requestedReview = await knex("review")
      .select("title", "description", "meal_id", "stars")
      .where({ id: request.params.id });
    response.json(requestedReview);
  } catch (error) {
    throw error;
  }
});

// 	Updates the review by id, PUT, endpoint: api/reviews/2
router.put("/:id", async (request, response) => {
  try {
    console.log(request.body);
    const reviews = await knex("review");
    await knex("review")
      .where({ id: request.params.id })
      .update({ description: "Such a lovely host with awesome food" })
      .then((item) =>
        response.json(
          reviews.filter((review) => review.id === parseInt(request.params.id))
        )
      );
  } catch (error) {
    throw error;
  }
});

// Deletes the review by id, DELETE, endpoint: api/reviews/2
router.delete("/:id", async (request, response) => {
  try {
    console.log(request.params);
    await knex("review").where({ id: request.params.id }).del();
    response.send(await knex("review"));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
