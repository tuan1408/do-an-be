export const entities_hotel= (req, res)=> {
    console.log(req.body.query_array)
    return res.json(req.body.query_array)
}