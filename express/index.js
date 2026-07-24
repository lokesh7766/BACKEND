const express = require("express")
const app = express()
app.get("/api",(req,res) =>{
    res.send("hello lokesh")
})

const port =  2000
app.listen(port,() => {
    console.log("the server is running ")
})