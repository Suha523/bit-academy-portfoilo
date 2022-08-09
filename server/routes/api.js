const express = require("express");
const router = express.Router();
const Comment = require("../models/Comments");

router.post("/comment", function (req, res) {
 // console.log(req.body.coment);
  const comment = req.body;
  //console.log(comment);
  const c = new Comment({
    comment :comment.coment
  });
  c.save();
  res.end();
});


module.exports = router;
