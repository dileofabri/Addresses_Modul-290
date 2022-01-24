var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "casamia123",
    database: "AddressesDB"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM AddressesDB", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        document.getElementsByClassName("result_field").write = (fields);
    });
});