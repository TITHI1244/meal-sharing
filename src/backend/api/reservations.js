const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations, GET, endpoint: api/reservations/
router.get("/", async (request, response) => {
  try {
    const titles = await knex("reservation");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//Adds a new reservation, POST, endpoint: api/reservations/
router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    await knex("reservation").insert({
      number_of_guests: request.body.number_of_guests,
      meal_id: request.body.meal_id,
      created_date: request.body.created_date,
      contact_phonenumber: request.body.contact_phonenumber,
      contact_name: request.body.contact_name,
      contact_email: request.body.contact_email,
    });
    response.json(request.body);
  } catch (error) {
    throw error;
  }
});

// Returns reservation by id, GET, endpoint: api/reservations/2
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const requestedReservation = await knex("reservation")
      .select(
        "number_of_guests",
        "meal_id",
        "created_date",
        "contact_phonenumber",
        "contact_name",
        "contact_email"
      )
      .where({ id: request.params.id });
    response.json(requestedReservation);
  } catch (error) {
    throw error;
  }
});

// Updates the reservation by id, PUT, endpoint: api/reservations/2
router.put("/:id", async (request, response) => {
  try {
    console.log(request.body);
    const reservations = await knex("reservation");
    await knex("reservation")
      .where({ id: request.params.id })
      .update({ meal_id: 2 })
      .then((item) =>
        response.json(
          reservations.filter(
            (reservation) => reservation.id === parseInt(request.params.id)
          )
        )
      );
  } catch (error) {
    throw error;
  }
});

// Deletes the reservation by id, DELETE, endpoint: api/reservations/2
router.delete("/:id", async (request, response) => {
  try {
    console.log(request.params);
    await knex("reservation").where({ id: request.params.id }).del();
    response.send(await knex("reservation"));
  } catch (error) {
    throw error;
  }
});

module.exports = router;
