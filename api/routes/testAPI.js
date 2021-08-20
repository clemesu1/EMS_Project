var express = require("express");
var router = express.Router();
const fs = require("fs");

const path = "../api/database/db.json"

router.get("/", function(req, res, next) {
    res.send("API is working properly");
    let data = fs.readFileSync(path);
    let patients = data.length !== 0 ? JSON.parse(data) : [];
    console.log('current patients', patients);
});

router.post("/create", function(req, res, next) {

    // get data from request, parse, and store in object.
    var vehicleDetails = Object.keys(req.body);

    // parse request body into json object
    var data = JSON.parse(vehicleDetails);

    // write updated patient list to json file.
    let json = JSON.stringify(data);
    fs.writeFileSync(path, json);
    res.end(json)
});

router.get("/patients", function(req, res, next) {
    let data = fs.readFileSync(path);
    res.send(data);
})


module.exports = router;