const mariadb = require('mariadb')
const { connect } = require('../routes/user')

const pool = mariadb.createPool({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Name,
    connectionLimit: 5
})

// connection handler

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection lost');
        }
        if (err.code === 'ERR_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if (connection) connection.release();
    return;
})

module.exports = pool;