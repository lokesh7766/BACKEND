const express = require("express")
const app = express()

app.set("view-engine","ejs")

app.get("/",(req,res) => {
    console.log("this is home page")

})
app.post("/api/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

const port =3000;
 app.listen(port,() => {
    console.log(   `port is runinng ${port}`)

})