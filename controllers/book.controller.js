exports.getAllBooks = (req, res) => {
    console.log("book api is called::")
    res.send("Got all books!!");
};

exports.createBook = (req, res) => {
    console.log("book api is called::")
    res.send("Got all books!!");
};

exports.getBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Got all book!!! "+ req.params.id);
};

exports.updateBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Got all book!!! "+ req.params.id);
};

exports.deleteBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Got all book!!! "+ req.params.id);
};

