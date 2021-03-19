// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, colName, burger_name, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, colName, burger_name], function (err, result) {

            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, colName, colValue, keyName, keyVal, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, colName, colValue, keyName, keyVal], function (err, result) {
            if(err) throw err;
            cb(result);
        });
    }

}


// Export the orm object for the model (cat.js).
module.exports = orm;