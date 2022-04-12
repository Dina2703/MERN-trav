//  npm i express-async-handler    //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers

const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ mssg: "Get goals" });
});

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    //below is express build-in error handler
    throw new Error("Please add a text field");
  }
  res.status(200).json({ mssg: "Set goal" });
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ mssg: `Update goal for ${req.params.id}` });
});

// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ mssg: `Delete goal for ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
