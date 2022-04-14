//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
  res.json({ mssg: "Register User" });
};

//@desc Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
  res.json({ mssg: "Login User" });
};

//@desc Get user data
//@route GET /api/users/me
//@access Private
const getMe = (req, res) => {
  res.json({ mssg: "User data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
