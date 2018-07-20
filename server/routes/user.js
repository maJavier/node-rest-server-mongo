//Imports
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const User = require('../models/users');
const _ = require('underscore');

app.get('/usuario', function (req, res) {
    res.json('get usuarios local')
});

app.post('/usuario', function (req, res) {
    
    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, userDB) => {

        if( err ) {
            return res.status(400).json({
                ok: false,
                err
            })
        }


        res.json({
            ok: true,
            usuario: userDB
        });

    });

});

app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'estado']);

    User.findByIdAndUpdate( id, body, { new: true, runValidators: true }, (err, userDB) => {

        if( err ) {
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.json({
            
            ok:true,
            usuario: userDB
    
        });

    });

    
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuarios')
});

module.exports = app;