//Imports
const express = require('express');
const app = express();
const User = require('../models/users')

app.get('/usuario', function (req, res) {
    res.json('get usuarios local')
});

app.post('/usuario', function (req, res) {
    
    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
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

    res.json({
        
        id

    })
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuarios')
});

module.exports = app;