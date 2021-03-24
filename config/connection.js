// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: '955503Sc!',
    database: 'burgers_db'
});

// Make connection
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

// Export the connection object for the orm to use.
module.exports = connection;