const express = require("express")
const {getperson, createperson, updateperson, deleteperson, getoneperson} = require("../controller/controller")
const router = express.Router()

router.get("/", getperson)
router.get("/:id",getoneperson)
router.post("/", createperson)
router.delete("/:id", deleteperson)
router.patch("/:id", updateperson)

module.exports = router