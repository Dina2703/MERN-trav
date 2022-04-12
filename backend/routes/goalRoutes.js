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

module.exports = router;
