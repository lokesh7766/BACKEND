const express = require("express");
const app = express();
const requestTimestamp = (req,res,next) => {

    const timeStamp =  new Date.toString();
    console.log(  ` ${timeStamp} from method ${req.method} to ${req.url}` )
    next()
}

app.use(requestTimestamp)



app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log(`Server is now running on port 3000`);
});

