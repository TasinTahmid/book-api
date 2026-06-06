require('dotenv/config');
const express = require("express");
const bookRouter = require("./routes/book.routes");
const { loggerMiddleware } = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/books", bookRouter);


app.listen(3000, () => {
    console.log("Listening on port 3000!!");
});