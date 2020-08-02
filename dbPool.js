const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ysqo2kvc2yduf013",
    password: "fy3fdta9ggmhp95g",
    database: "jc79r2nihoyoet2s"
});

module.exports = pool;

// ysqo2kvc2yduf013
// fy3fdta9ggmhp95g
// gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
// jc79r2nihoyoet2s
