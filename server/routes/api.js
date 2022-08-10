const express = require("express");
const router = express.Router();

const Program = require("../models/Program");
const Company = require("../models/Companies");
const Comment = require("../models/Comments");

router.get("/program/:programId", (req, res) => {
  let programId = req.params.programId;

  Program.findOne(programId, function (err, program) {
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


module.exports = router


