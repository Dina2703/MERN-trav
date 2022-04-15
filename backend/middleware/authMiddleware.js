//MIDDLEWARE is a function that runs during the request and response cycle.

//When we send a request to a route or an endpoint, this function(protect()) will check the token.

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //check authorization header, making sure it's a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header and assign it to 'token' variable
      //used .split(" ")[1] - so we can get second part of a string(which is token itself), since token starts with Bearer, like ->'Bearer someTokenCode'.

      token = req.headers.authorization.split(" ")[1];

      //Verify token. Now in 'decoded' we have the payload, which contains: user id, issued date, and expited date. Since we passing the user {id} to generateToken function(look userController.js)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token (token has the user id as a payload). .select("-password") - means not include the password
      req.user = await User.findById(decoded.id).select("-password");

      //call the next().next() without parameter invokes the next route handler OR next middleware in framework.
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized, no token");
  }
});

module.exports = { protect };

//to check if it works:
// first add:  const { protect } = require("../middleware/authMiddleware"); and pass this function as a third params for the router.get("/me", protect, getMe);
// now go to postman, GET http://localhost:8000/api/users/me , open 'Authorization' tab, for 'Type' choose 'Bearer Token' then pass your token code(that we can get from POST user data), if token is correct, will get    "mssg": "User data"   response.
