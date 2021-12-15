const express= require ("express")
const router = express.Router()
const a =require("../controller/a")

router.get("/", a.index)

module.exports = router