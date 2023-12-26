const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'sakila',
    user: 'root',
    password: '1234',
});

module.exports = connection;