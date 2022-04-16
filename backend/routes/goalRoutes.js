const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

//GET request
router.get("/", protect, getGoals);

//POST request
router.post("/", protect, setGoals);

//PUT request
router.put("/:id", protect, updateGoals);

//DELETE request
router.delete("/:id", protect, deleteGoals);

//short version for CRUD Api, instead of the writing single line for each request, we can combine them by a route.
// router.route("/").get(getGoals).post(setGoals);
// router.route("/:id").delete(deleteGoals).put(updateGoals);

module.exports = router;
