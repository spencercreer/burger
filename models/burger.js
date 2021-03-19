const orm = require('../config/orm.js');

const burger = {
    // could try without function 
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(cols, colValue, keyName, keyVal, cb) {
        orm.updateOne('burgers', cols, colValue, keyName, keyVal, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;