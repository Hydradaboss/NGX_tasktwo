const express = require("express")
const connectdb = require("./dbconnect/connect")
require("dotenv").config()
const personrouter = require("./route/router")

const app = express()
app.use(express.json())
app.use("/api", personrouter)


const PORT = process.env.PORT || 3000

const start = async ()=>{
    await connectdb(process.env.MONGOURL)
    app.listen(PORT, console.log(`running on port ${PORT}`))
}
start()