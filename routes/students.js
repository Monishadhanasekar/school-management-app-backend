const router = require('express').Router();
const Student = require('../models/student.model');

router.route('/').get((req,res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => re.status(400).json('Error:' +err))
});

router.route('/:id').put((req,res) => {
    Student.findById(req.params.id)
    .then(student => {
       student.teachername = req.body.teachername
     student.save()
    .then(() => res.json('Student updated!'))
    .catch(err => res.status(400).json('Error:' +err))
});
});

router.route('/add').post((req,res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    
    const newStudent = new Student({
        name, username, email
    });
   newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/:id').get((req,res) => {
    Student.findById(req.params.id)
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/:id').delete((req,res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(() => res.json('Student deleted!'))
        .catch(err => res.status(400).json('Error:' +err))
});

router.route('/update/:id').post((req,res) =>{
    Student.findById(req.params.id)
        .then(student => {
            student.name = req.body.name;
            student.username = req.body.username;
            student.email = req.body.email;
           student.teachername = req.body.teachername
         student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error:' +err))
});
});

module.exports = router;