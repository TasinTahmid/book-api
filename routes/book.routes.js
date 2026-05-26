const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("book api is called::")
    res.send("Got all books!!");
});

router.get("/:id", (req, res) => {
    console.log("book api is called::", req.params.id)
    res.send("Got all books!!! "+ req.params.id);
});

module.exports = router;