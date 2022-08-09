const express = require("express");
const router = express.Router();
const Program = require("../models/Program");

router.get("/program/:program", (req, res) => {
  let program = req.body;
  console.log(program);
});

router.post("/save", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.end();
});
router.get("/program/:programName", (req, res) => {
  let programName = req.params.programName;

  Program.findOne({ name: programName }, function (err, program) {
    res.send(program);
  });
});

module.exports = router;
