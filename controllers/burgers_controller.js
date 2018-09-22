// dependencies
var express = require('express');

var router = express.Router();

// connection to burgers.js
var burger = require("../models/burgers.js");

// get function to "get" all from burgers table
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// post function for "posting" a new burger to the table
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// put function to update the devoured portion
router.put("/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;