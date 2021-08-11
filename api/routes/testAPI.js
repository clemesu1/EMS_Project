var express = require("express");
var router = express.Router();
const fs = require("fs");

const path = "C:/repos/EMS_Project/api/database/db.json"

router.get("/", function(req, res, next) {
    res.send("API is working properly");
    let data = fs.readFileSync(path);
    let patients = data.length !== 0 ? JSON.parse(data) : [];
    console.log('current patients', patients);
});

router.post("/create", function(req, res, next) {
    // get data from request and store in object
    const newPatient = {
        name: req.body.name,
        password: req.body.password
    };

    // read existing patients from json file.
    let data = fs.readFileSync(path);
    let patients = data.length !== 0 ? JSON.parse(data) : [];

    // add new patient to existing patients
    patients.push(newPatient);

    // write updated patient list to json file.
    let json = JSON.stringify(patients);
    fs.writeFileSync(path, json);

    res.end(json)
});


module.exports = router;