import connection from "../database/init.js"

export const suggest_travel= (req, res)=> {
    connection.query("SELECT * FROM popular_travels limit 8",  (err, rows, fields)=> {
        if(err) console.log(err)
        return res.json(rows)
    })
}