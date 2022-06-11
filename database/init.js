import mysql from "mysql2"

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ticket",
    password: "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default connection
