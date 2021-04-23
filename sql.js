/*
 * sql.js
 * Author: Richard Whitney
 * Date: 2021-04-23
 *
 * */

module.exports = {

    sum: {
        sql : "SELECT SUM(amount) as sum FROM events"
    },

    events: {
        sql: "SELECT *,CONCAT(title,' ',amount) as title FROM events"
    },

    addEvent: {
        sql: "INSERT INTO events SET ?"
    },

    charts: {
        sql: "SELECT title,SUM(amount) as amount FROM events WHERE start > ? GROUP BY title ORDER BY amount"
    }

};
