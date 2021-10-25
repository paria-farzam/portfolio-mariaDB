const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    connectionLimit : 5
})

pool.getConnection((err, con)=>{
    if(err) console.log(err);
    if(con) con.release();
    return;
})

module.exports = pool;