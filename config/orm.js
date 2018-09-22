// imports connection.js
var connection = require('../config/connection.js');

// orm object for query functions
var orm = {

    // select all from burgers table
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // insert one into burgers table 
    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // update devour element on burgers table
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;