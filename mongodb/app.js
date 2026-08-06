const express = require("express");
const app = express();
app.use(express.json);

let books = [{
    id: 1,
    title: book1,
},
{
    id:2,
    title:book2,
}]