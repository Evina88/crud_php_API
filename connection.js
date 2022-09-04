const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "test1",
    password: "123456789",
    database: "crud_php"
});

connection.connect((err)=>{
    if(!err) {
        console.log("Connected");
    }
    else console.log(err);
});

module.exports = connection;