const express = require('express')
const router = express.Router()
const Program = require('../models/Program')


router.get('/program/:program', (req, res) => {
    let program = req.body
    console.log(program);
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
