exports.getAllBooks = (req, res) => {
    console.log("book api is called::")
    res.send("Got all books!!");
};

exports.createBook = (req, res) => {
    console.log("book api is called::")
    res.send("Book created successfully!!");
};

exports.getBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Get book id by "+ req.params.id);
};

exports.updateBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Update book id by "+ req.params.id);
};

exports.deleteBookById = (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Deleted book id by "+ req.params.id);
};

