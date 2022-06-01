import express from "express"
import { airport_autocomplete } from "../controller/airport_autocomplete.js"
import { code_aiport } from "../controller/code_airport.js"
import { entities_hotel } from "../controller/entities_hotel.js"
import { fullsearch } from "../controller/fullsearch.js"
import { login } from "../controller/login.js"
import { prebooking } from "../controller/prebooking.js"
import { result_hotel } from "../controller/result_hotel.js"
import { search_airport } from "../controller/search_airport.js"
import { search_combo } from "../controller/search_combo.js"
import { search_hotel } from "../controller/search_hotel.js"
import { signup } from "../controller/signup.js"
import { suggest } from "../controller/suggest.js"
import { suggest_travel } from "../controller/suggest_travel.js"
const router = express.Router()
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})
router.post("/api/v1/flight/search", search_airport)
router.post("/api/v1/hotel/search", search_hotel)
router.get("/api/v1/hotel/autocomplete", suggest_travel)
router.get("/api/v1/airport/autocomplete", airport_autocomplete)
router.get("/api/v2/airport/codeairport", code_aiport )
router.post("/api/v4/airport/fullsearch", fullsearch)
router.post("/v2/api/result/hotel", result_hotel)
router.post("/v2/api/entities/hotel", entities_hotel)
router.post("/v2/api/result/search/combo", search_combo)
router.post("/v4/api/prebooking", prebooking)
router.post("/v2/api/suggest/result", suggest)
router.post("/signup",signup)
router.post("/login", login)

export default router
