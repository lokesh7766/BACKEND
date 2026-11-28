const   express = require('express')
const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

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
app.post("/new",(req,res) =>{
   console.log("Request received!");
    console.log(req.headers['content-type']);
    console.log(req.body);

    messages.push({

        text:req.body.text,
        user:req.body.user,
        time: new Date()
    })
    res.redirect("/")
})
app.listen(3000,() =>{

    console.log("server running on port ")
})