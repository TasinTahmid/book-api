const express = require("express");

const app = express();

app.use(express.json());

app.get("/books", (req, res) => {
    console.log("book api is called::")
    res.send("Got all books!!");
});

app.get("/books/:id", (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Got all books!!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000!!");
});