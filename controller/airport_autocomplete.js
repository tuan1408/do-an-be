import connection from "../database/init.js"

export const airport_autocomplete= (req, res)=> {
    connection.query("SELECT * FROM popular_airports", (err, rows, fields)=> {
        if(err) console.log(err)
        return res.json(rows)
    })
}