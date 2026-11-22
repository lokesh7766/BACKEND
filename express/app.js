const express = require("express")
const app = express()

app.get('/',(req,res) =>{

  res.send('hello WORLD ');

})

const PORT = 8080;

app.listen(PORT, (error) =>{

  if(error){
    throw error
  }
  console.log("runnning on port ");
}
)