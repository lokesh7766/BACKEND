const express = require('express');
const app = express();

app.use(express.json);
let books = [
    { id: '1',
        book: 'book 1'
    },
    {}
]

// intro rut 


app.get( '/',(req,res ) => {
res.json({message: "welome to our page"});
})
//get books 
app.get('/getbooks',(req,res) => {

    res.json(books);
})



app.get('/get/:id',(req,res) => {
const findbook = books.find((item ) => {item.id == req.params.id})
if(findbook){
    res.json.status(200)
    res.json(findbook)
}
else{
    console.log("book not found ")
}


})


///add book 
app.post('/add',(req,res) => {
    const newbook = {

        id : books.length + 1,
        title: `book ${books.length
            + 1
        }`

    }
books.push(newbook)
res.json.status(200)
res.json(
    {
        data : newbook,
        message : "books added ",
    }
)
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
app.delete("/delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === req.params.id
  );
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});





const PORT  = 3000;
app.listen(PORT,() => {

        console.log("port running succesfull ");
        
})