const express = require("express");
const router = express.Router();
const moment = require('moment')
const Program = require('../models/Program')
const Company = require("../models/Companies")
const Application = require('../models/Application')

router.get("/program/:programName", (req, res) => {
  let programName = req.params.programName;

  Program.findOne({ name: programName }, function (err, program) {
    res.send(program);
  });
});

router.get("/get", (req, res) => {
  Program.find({}, function (err, programms) {
    res.send(programms);
  });
});

router.post("/save", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.end();
});

router.get("/companies", (req, res) => {
  Company.find({}, function (err, companies) {
    res.send(companies);
  });
});

router.post("/company", (req, res) => {
  let newCompany = new Company(program);
  newCompany.save();
  res.end();
});



router.get('/program/:programName', (req, res) => {
    let programName = req.params.programName

    Program.findOne({name: programName}, function(err, program){
        res.send(program)
    })  
})

router.get('/getPrograms', (req, res) => {
    Program.find({}, function(err, programs) {
        res.send(programs)
    })
});

router.post('/saveProgram', (req, res) => {
    let program = req.body
    let newProgram = new Program(program)
    newProgram.save()
    res.send(newProgram)  
})

router.put('/updateProgram/:programName', function(req, res){
    let programName = req.params.programName
    let newProgram = req.body
    try{
        Program.findOneAndUpdate(
            {name: programName},
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

router.delete('/deleteProgram/:programName', function(req, res){
    let programName = req.params.programName
    Program.findOneAndDelete({name: programName}, function(err, program){
        res.send(program)
    })
})


router.post('/saveApplication', function(req, res){
    let application = req.body
    let newApplication = new Application(application)
    newApplication.save()
    res.send(newApplication)
})

module.exports = router

