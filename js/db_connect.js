let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "casamia123",
    db: "AddressesDB"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

