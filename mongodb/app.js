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



app.get("/get/:id", (req,res) => {

const book = books.find((item) => item.id === req.params.id)
if(book){
    res.status(200).json({
        book : book,
    })}




 else{

    req.status(404).json({
        message : " falilurreeeeeeeee",
    })
}

}
)


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
})








app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === req.params.id
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});











const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});