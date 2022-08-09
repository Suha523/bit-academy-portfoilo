const express = require('express')
const router = express.Router()
const Program = require('../models/Program')


router.get('/program/:programName', (req, res) => {
    let programName = req.params.programName

    Program.findOne({name: programName}, function(err, program){
        res.send(program)
    })  

})

// router.get('/get', (req, res) => {
//     Item.find({}, function(err, data) {
//         console.log(data)
//         res.send(data)
//     })
// });

router.post('/save', (req, res) => {
    let program = req.body
    let newProgram = new Program(program)
    newProgram.save()
    res.end()  
})

module.exports = router
