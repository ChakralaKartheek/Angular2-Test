var express = require('express');
var router = express.Router();

var Emp = require('./emp.js');

/* GET users listing. */
router.get('/getEmployees', function (req, res) {
    var emps = [
        new Emp(1, "kartheek", "Male", "I am Actor", "", "AP", 500),
        new Emp(2, "Sujith", "Male", "I am Actor", "", "US", 500),
        new Emp(3, "Ranjith", "Male", "I am Actor", "", "Kerala", 500),
        new Emp(4, "Peggy", "Female", "", "I am Actress", "US", 500),
        new Emp(5, "Laura", "Female", "", "I am Actress", "US", 1600),

    ];
    res.send(emps);
});

module.exports = router;