import connection from "../database/init.js"

export const search_airport= (req, res)=> {
    connection.query(`SELECT * from airports where MATCH(name_airport) AGAINST ('${req.body.query_string}' IN BOOLEAN MODE) OR MATCH(location_airport) AGAINST ('${req.body.query_string}' IN BOOLEAN MODE) OR MATCH(country_airport) AGAINST ('${req.body.query_string}' IN BOOLEAN MODE) OR MATCH(code_airport) AGAINST ('${req.body.query_string}' IN BOOLEAN MODE)`, (err, rows, fields)=> {
        return res.json(rows)
    })
}