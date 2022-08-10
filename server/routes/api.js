const express = require("express");
const router = express.Router();

const Program = require("../models/Program");
const Company = require("../models/Companies");
const Comment = require("../models/Comments");
const messages = require("../models/message");

const moment = require('moment')
const Application = require('../models/Application')


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
  let newCompany = new Company(company);
  console.log(newCompany);
  newCompany.save();
  res.send(newCompany);
});
router.put("/company/:companyName", (req, res) => {
  let companyName = req.params.companyName;
  let updatedCompany = req.body;
  Company.findOneAndUpdate(
    { name: companyName },
    {
      name: updatedCompany.name,
      img: updatedCompany.img,
      description: updatedCompany.description,
    },
    { new: true },
    function (err, updatedCompany) {
      res.send(updatedCompany);
    }
  );
});

router.post("/saveProgram", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.send(newProgram);
});



router.post("/comment", function (req, res) {
  const comment = req.body;
  const c = new Comment({
    comment: comment.coment,
  });
  c.save();
  res.end();
});

router.get("/comments", function (req, res) {
  let retriveComments = [];
  Comment.find({}, function (err, comments) {
    retriveComments = comments;
    let newarray = retriveComments.slice(-5);
  res.send(newarray);
    res.end();
  });
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


router.post('/saveProgram', (req, res) => {
    let program = req.body
    let newProgram = new Program(program)
    newProgram.save()
    res.send(newProgram)  
})

router.put('/updateProgram/:programId', function(req, res){
    let programId = req.params.programId
    let newProgram = req.body
    try{
        Program.findByIdAndUpdate(
          programId,
            {
                name: newProgram.name,
                price: newProgram.price,
                deadlineSubmit: newProgram.deadlineSubmit,
                startDate: newProgram.startDate,
                endDate: newProgram.endDate,
                description: newProgram.description,
                filters: newProgram.filters
            }, {
                new: true
            },
                function(err, program){
                res.send(program)
        })
    }

    catch(error){
        res.status(404).send({error: "the program does not exist"})
    }
})

router.delete('/deleteProgram/:programId', function(req, res){
    let programId = req.params.programId
    Program.findByIdAndDelete(programId, function(err, program){
        res.send(program)
    })
})

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


router.post("/comment", function (req, res) {
   const comment = req.body;
   const c = new Comment({
     comment :comment.coment
   });
   c.save();
   res.end();
 });

 router.get("/comments", function (req, res) {
  let retriveComments = [];
  Comment.find({}, function (err, comments) {
    retriveComments = comments;
    let newarray = retriveComments.slice(-5);
  res.send(newarray);
    res.end();
  });
});

router.post('/saveApplication', function(req, res){
  let application = req.body
  let newApplication = new Application(application)
  newApplication.save()
  res.send(newApplication)
})



module.exports = router;