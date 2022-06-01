import connection from "../database/init.js"

export const search_hotel= (req, res)=> {
    connection.query(`SELECT * from travels where MATCH(destination) AGAINST ('${req.body.query_string}' WITH QUERY EXPANSION) OR MATCH(location_travel) AGAINST ('${req.body.query_string}' WITH QUERY EXPANSION)`, (err, rows, fields)=> {
        return res.json(rows)
    })
}