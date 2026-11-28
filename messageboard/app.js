const   express = require('express')
const app = express();
app.set('view engine', 'ejs')

const messages = [
    {
        text: "Hi there!",
        user: "Amando"
    },
    {
        text: "Hello World!",
        user: "Charles"
    }
];
app.get("/",(req,res) =>{


    res.render("index" ,{messages : messages})
})
app.get("/new",(req,res) =>{

    res.render("new",)
})
app.listen(3000,() =>{

    console.log("server running on port ")
})