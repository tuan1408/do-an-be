import connection from "../database/init.js"

export const search_hotel = (req, res) => {
    // connection.query(`SELECT * from travels where MATCH(destination) AGAINST ('${req.body.query_string}' IN NATURAL LANGUAGE MODE) OR MATCH(location_travel) AGAINST ('${req.body.query_string}' IN NATURAL LANGUAGE MODE)`, (err, rows, fields) => {
    //     return res.json(rows)
    // })
    connection.query(`SELECT * from travels where destination like('%${req.body.query_string}') or location_travel like('%${req.body.query_string}')`, (err, rows, fields) => {
        return res.json(rows)
    })
}