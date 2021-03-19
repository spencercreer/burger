const orm = require('../config/orm.js');

const burger = {
    // could try without function 
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(colName, burger_name, cb) {
        orm.insertOne('burgers', colName, burger_name, function(res) {
            cb(res);
        });
    },
    update: function(colName, colValue, keyName, keyVal, cb) {
        orm.updateOne('burgers', colName, colValue, keyName, keyVal, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;