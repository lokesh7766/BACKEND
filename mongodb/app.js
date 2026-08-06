const express = require("express");
const app = express();
app.use(express.json);

let books = [{
    id: 1,
    title: "book1",
},
{
    id:2,
    title:"book2",
}]


app.get(("/", (req,res) =>{
    res.json({
        Message : " welcoome "
    })
}))




app.get(("/get", (req,res) =>{
    res.json(books)
}))


app.post("/add", (req,res) => {
      const newBook = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
}   
books.push(newBook);
res.status(200).json({
    data : " received",
    book :  newBook,
})





















const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});