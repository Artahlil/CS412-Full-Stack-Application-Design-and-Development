const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfig');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncGet = promisify(client.get).bind(client)
const asyncSet = promisify(client.set).bind(client)
const asyncExists = promisify(client.exists).bind(client)
const asyncExpire = promisify(client.expire).bind(client)

client.flushdb((error, response) => {
    if (error) {
        throw new Error("Error while flushing")
    }
});
    router.post('/', async (req, res, next) => {
        const locale = req.body.cityname;
        let match = await asyncExists(locale);
        if (match) {
            let cached_data = await asyncGet(locale);
            let cached_obejct = JSON.parse(cached_data);
            const temp = cached_obejct.temp_f;
            let response = {
                data: cached_obejct,
                cached: true
            }
                res.send(response);
     }
        else {
            let raw = await fetch(FETCHCONFIG.fetchOptions.url+locale.toString());
            let clean = await raw.json();
            await asyncSet(locale, JSON.stringify(clean));
            let response = {
                data: clean,
                cached: false
        }
            await asyncExpire(locale, 15);
            res.send(response);
      }
    })

const response = async locale => {
    let raw = await fetch(FETCHCONFIG.fetchOptions.url+locale.toString());
    let clean = await raw.json();
    return clean;
}

module.exports = router;