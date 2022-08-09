const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/city/:city", (req, res) => {});

router.get("/get", (req, res) => {
  Item.find({}, function (err, data) {
    console.log(data);
    res.send(data);
  });
});

router.get("/item", (req, res) => []);
router.post("/save", (req, res) => {
  let data = req.body;
  let newItem = new Item(data);
  newItem.save();
});

module.exports = router;
