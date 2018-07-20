const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is required']
    },
    password: {
        type: String,
        required: [true, 'The Password is required']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

userSchema.plugin( uniqueValidator, { message: ' {PATH} already registred ' })

module.exports = mongoose.model('user', userSchema)


