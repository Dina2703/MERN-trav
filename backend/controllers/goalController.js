// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ mssg: "Get goals" });
};

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {
  res.status(200).json({ mssg: "Set goal" });
};

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
  res.status(200).json({ mssg: `Update goal for ${req.params.id}` });
};

// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ mssg: `Delete goal for ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
