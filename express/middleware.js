const express = require("express")
const app = express()

const firstmiddleware = (req,res,next ) => {
    console.log("this is my first middleware ")
    next()
}
app.use(firstmiddleware)



app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});


app.listen(3000, () => {
  console.log(`Server is now running on port 3000`);
});
