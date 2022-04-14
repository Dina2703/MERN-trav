const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

//GET request
router.get("/", getGoals);

//POST request
router.post("/", setGoals);

//PUT request
router.put("/:id", updateGoals);

//DELETE request
router.delete("/:id", deleteGoals);

//short version for CRUD Api, instead of the writing single line for each request, we can combine them by a route.
// router.route("/").get(getGoals).post(setGoals);
// router.route("/:id").delete(deleteGoals).put(updateGoals);

module.exports = router;
