const express = require("express");
const router = express.Router();
const Program = require("../models/Program");
const Company = require("../models/Companies");
const Comment = require("../models/Comments");
const messages = require("../models/message");
const admins = require("../models/admin");

router.get("/program/:programName", (req, res) => {
  let programName = req.params.programName;

  Program.findOne({ name: programName }, function (err, program) {
    res.send(program);
  });
});

router.get("/programs", (req, res) => {
  Program.find({}, function (err, programms) {
    res.send(programms);
  });
});
router.get("/companies", (req, res) => {
  Company.find({}, function (err, companies) {
    res.send(companies);
  });
});

router.post("/company", (req, res) => {
  let company = req.body;
  // console.log(company);
  let newCompany = new Company(company);
  console.log(newCompany);
  // newCompany.save();
  res.send(newCompany);
});
router.put("/company/:companyName", (req, res) => {
  let companyName = req.params.companyName;
  Company.findOneAndUpdate({ name: companyName }, {});
});

router.post("/saveProgram", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.send(newProgram);
});

router.put("/updateProgram/:programName", function (req, res) {
  let programName = req.params.programName;
  let newProgram = req.body;
  try {
    Program.findOneAndUpdate(
      { name: programName },
      {
        name: newProgram.name,
        price: newProgram.price,
        deadlineSubmit: newProgram.deadlineSubmit,
        startDate: newProgram.startDate,
        endDate: newProgram.endDate,
        description: newProgram.description,
        filters: newProgram.filters,
      },
      {
        new: true,
      },
      function (err, program) {
        res.send(program);
      }
    );
  } catch (error) {
    res.status(404).send({ error: "the program does not exist" });
  }
});

router.delete("/deleteProgram/:programName", function (req, res) {
  let programName = req.params.programName;
  Program.findOneAndDelete({ name: programName }, function (err, program) {
    res.send(program);
  });
});

router.post("/comment", function (req, res) {
  // console.log(req.body.coment);
  const comment = req.body;
  //console.log(comment);
  const c = new Comment({
    comment: comment.coment,
  });
  c.save();
  res.end();
});
router.post("/postcontact", (req, res) => {
  let message = { ...req.body };
  console.log(message);
  const messageInfo = new messages(message);
  messageInfo.save();
  res.end();
});

router.delete("/company/:companyName", (req, res) => {
  let companyName = req.params.companyName;
  console.log(companyName);
  Company.findOneAndDelete({ name: companyName }, function (err, company) {
    res.send(company);
  });
});

router.post("/saveProgram", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.send(newProgram);
});

router.put("/updateProgram/:programId", function (req, res) {
  let programId = req.params.programId;
  let newProgram = req.body;
  try {
    Program.findByIdAndUpdate(
      programId,
      {
        name: newProgram.name,
        price: newProgram.price,
        deadlineSubmit: newProgram.deadlineSubmit,
        startDate: newProgram.startDate,
        endDate: newProgram.endDate,
        description: newProgram.description,
        filters: newProgram.filters,
      },
      {
        new: true,
      },
      function (err, program) {
        res.send(program);
      }
    );
  } catch (error) {
    res.status(404).send({ error: "the program does not exist" });
  }
});

router.delete("/deleteProgram/:programId", function (req, res) {
  let programId = req.params.programId;
  Program.findByIdAndDelete(programId, function (err, program) {
    res.send(program);
  });
});
router.post("/login", function (req, res) {
  // // req.bogy // [ user , pass] req.body .username //req.body .apss
  // admins.findOne({user :user }) /// obj = { user:anas , passsword  : 123 }
  let loginadmin = req.body;
  let userName = loginadmin.userName;
  let password = loginadmin.password;
  //   console.log(loginadmin);
  admins.findOne(
    { userName: userName, password: password },
    function (err, admin) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!admin) {
        return res.status(404).send();
      }

      return res.status(200).send();
    }
  );
});
router.post("/register", function (req, res) {
  let admin = req.body;
  let newAdmin = new admins(admin);
  console.log(admin);
  newAdmin.save();
  res.end();
});
module.exports = router;
