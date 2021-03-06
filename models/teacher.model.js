const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    
    name:{type: String, required: true},
    username:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type:Number, required: true}
},{
    timestamps: true
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
