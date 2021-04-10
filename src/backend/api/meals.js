const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const meals = await knex("meal");
    console.log(request.query);

    if (
      (isNaN(parseInt(request.query.maxPrice)) &&
        request.query.maxPrice !== undefined) ||
      (isNaN(Date.parse(request.query.createdAfter)) &&
        request.query.createdAfter !== undefined) ||
      (isNaN(parseInt(request.query.limit)) &&
        request.query.limit !== undefined)
    ) {
      response.status(400).end();
    } else {
      const maxPrice =
        request.query.maxPrice !== undefined
          ? parseInt(request.query.maxPrice)
          : Math.max(...meals.map((meal) => meal.price)) + 1;
      const title =
        request.query.title !== "" && request.query.title !== undefined
          ? request.query.title.toLowerCase()
          : "";
      const firstCreatedDate = Math.min(
        ...meals.map((meal) => Date.parse(meal.created_date))
      );
      const createdAfter =
        request.query.createdAfter !== "" &&
        request.query.createdAfter !== undefined
          ? request.query.createdAfter
          : firstCreatedDate;
      const limit =
        request.query.limit !== undefined
          ? parseInt(request.query.limit)
          : meals.length;
      try {
        const selectedMeals = await knex("meal")
          .select(
            "id",
            "title",
            "description",
            "location",
            "when",
            "max_reservations",
            "price",
            "image"
          )
          .limit(limit)
          .where(function () {
            this.where("price", "<", maxPrice);
          })
          .andWhere(function () {
            this.where("title", "like", `%${title}%`);
          })
          .andWhere(function () {
            this.where("created_date", ">", createdAfter);
          });
        response.json(selectedMeals);
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    await knex("meal").insert({
      title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      when: request.body.when,
      max_reservations: request.body.max_reservations,
      price: request.body.price,
      created_date: request.body.created_date,
    });
    response.json(request.body);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const requestedMeal = await knex("meal")
      .select(
        "title",
        "description",
        "location",
        "when",
        "max_reservations",
        "price"
      )
      .where({ id: request.params.id });
    response.json(requestedMeal);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    console.log(request.body);
    const meals = await knex("meal");
    await knex("meal")
      .where({ id: request.params.id })
      .update({
        description:
          "Danish classic dessert with sweet summer berries, and a little twist.",
      })
      .then((item) =>
        response.json(
          meals.filter((meal) => meal.id === parseInt(request.params.id))
        )
      );
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    console.log(request.params);
    await knex("meal").where({ id: request.params.id }).del();
    response.send(await knex("meal"));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
