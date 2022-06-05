import { v4 } from "uuid"
import connection from "../database/init.js"

export const add_flight= (req, res)=> {
    connection.query(`INSERT INTO flight(origin, destination, brand, timestart, timearrive, cost_adult, discount, seatclass, aircraft_number, refund, cost_kid, cost_baby, tax, package, eating, entertainment, id_flight, logo_brand, dayflight, daydestination, wifi, charger, c_timeflight, c_timedestination, roundtrip, capacity_customer)
    VALUES('${req.body.origin}','${req.body.destination}','${req.body.brand}','${req.body.timestart}','${req.body.timearrive}',${req.body.cost_adult},${req.body.discount},'${req.body.seatclass}','${req.body.aircraft_number}',${0},${req.body.cost_kid},${req.body.cost_baby},${req.body.tax},${req.body.package},${req.body.eating},${req.body.entertainment},'${v4()}','${req.body.logo_brand}','${req.body.dayflight}','${req.body.daydestination}',${moment(`${req.body.timestart} ${req.body.dayflight}`, "hh:mm DD-MM-YYYY").valueOf()},${moment(`${req.body.timearrive} ${req.body.daydestination}`, "hh:mm DD-MM-YYYY").valueOf()}), 0, 100`, (err, rows, fields)=> {
        if(err) return console.log(err)
        return res.json("success")
    })
}