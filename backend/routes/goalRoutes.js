const express = require("express");
const router = express.Router();

//GET request
router.get("/", (req, res) => {
  // res.send("Get goals");  //Content-type: text/html
  res.status(200).json({ mssg: "Get goals" }); //Content-type: application/json
});

//POST request

router.post("/", (req, res) => {
  res.status(200).json({ mssg: "Set goal" });
});
//PUT request
router.put("/:id", (req, res) => {
  res.status(200).json({ mssg: `Update goal for ${req.params.id}` });
});
//DELETE request
router.delete("/:id", (req, res) => {
  res.status(200).json({ mssg: `Delete goal for ${req.params.id}` });
});

module.exports = router;
