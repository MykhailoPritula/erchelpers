require('dotenv').config()
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'erchelpers',
    password: 'S7]SBWU@(g[SV/x@',
    database: 'erchelpers'
})

const createTable = `create table if not exists users(
    id int primary key auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    phone varchar(255),
    company varchar(255),
    quiz TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

pool.query(createTable, (error, elements) => {
    if (error) {
        console.log(error.message)
    }
})

module.exports = pool