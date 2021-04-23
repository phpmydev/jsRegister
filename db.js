/*
 * db.js
 * Author: Richard Whitney
 * Date: 2021-04-23
 *
 * */

var mysql   = require("mysql");
var queries = require('./sql');
var config  = require('./config');

var connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.database,
    connectionLimit: 50,
});

connection.connect();

module.exports = {
  sql : function(qname, data, callback) {
    var sql = queries[qname].sql;
    sql = mysql.format(sql, data);
    connection.query(sql, function (err, res) {

      connection.end;

      if (err) {
        callback(err, null);
      } else {
        callback(null, res );
      }
    });
  }
}
