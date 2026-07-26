const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://lokesh77664_db_user:FsQjIXvReIAXhWJj@cluster0.fjlc0kr.mongodb.net/")
    .then(() => console.log("database connected successfully"))
    .catch((e) => console.log(e));
