var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "us-cdbr-iron-east-04.cleardb.net",
	user: "b8f4de70ec39ca",
	password: "485d0c60",
	database: "heroku_aeba885553ce938"
});

connection.connect(function(err){
    if (err) {
        console.error("error connection: "+err.stack);
        return;
    }
    console.log("connected as id: "+connection.threadId);
    
});

module.exports = connection;
