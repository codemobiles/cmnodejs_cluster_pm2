const express = require("express")
const app = express()

let count = 0
app.get("/count", (req, res)=>{
    count++
    res.json({count})
})

app.listen(3000, ()=>{
    console.log("server is running..")
})