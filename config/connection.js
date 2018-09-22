// pulling in our required dependencies
var mysql = require('mysql');
// created mysql connection object
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}
// making the connection to mysql
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exports connection for orm use
module.exports = connection;