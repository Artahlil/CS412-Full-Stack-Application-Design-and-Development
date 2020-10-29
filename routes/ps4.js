const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfig');

const response = async locale => {
    let raw = await fetch(FETCHCONFIG.fetchOptions.url+locale.toString());
    let clean = await raw.json();
    return clean;
}

router.route('/')
    .post( (req, res, next) => {
        response(req.body.cityname)
            .then(clean => res.render('ps4', {'city' : clean.name, 'temp' : clean.temp_f }))
            .catch(error => console.log("Failed to fetch JSON"))
    })

module.exports = router;