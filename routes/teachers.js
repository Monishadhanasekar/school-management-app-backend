const router = require('express').Router();
const Teacher = require('../models/teacher.model');

router.route('/').get((req,res) => {
    Teacher.find()
        .then(teachers => {
            return res.json(teachers)})
        .catch(err => re.status(400).json('Error:' +err))
});

router.route('/add').post((req,res) =>{
    
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;

    const newTeacher = new Teacher({
        name, username, email, phone
    });
   newTeacher.save()
        .then(() => res.json('Teacher added!'))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/:id').get((req,res) => {
    Teacher.findById(req.params.id)
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/:id').delete((req,res) => {
    Teacher.findByIdAndDelete(req.params.id)
        .then(() => res.json('Teacher deleted!'))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/update/:id').post((req,res) =>{
    Teacher.findById(req.params.id)
        .then(teacher => {
            
            teacher.name = req.body.name;
            teacher.username = req.body.username;
            teacher.email = req.body.email;
            teacher.phone = req.body.phone
         teacher.save()
        .then(() => res.json('Teacher updated!'))
        .catch(err => res.status(400).json('Error:' +err))
});
});



module.exports = router;