const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

// Export the orm object for the model (connection.js).
module.exports = connection;