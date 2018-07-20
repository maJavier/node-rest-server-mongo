// Imports
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValids = {
    values: ['ADMIN_ROL', 'USER_ROL'],
    message: '{VALUE} no es un rol valido'
};

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
        default: 'USER_ROL',
        enum: rolesValids
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

userSchema.methods.toJSON = function() {

    let usuario = this;
    let userObject = usuario.toObject();
    delete userObject.password;

    return userObject;

};


userSchema.plugin( uniqueValidator, { message: ' {PATH} already registred ' })

module.exports = mongoose.model('user', userSchema)


