const express = require("express");
const controller = require("../controllers/book.controller");

const router = express.Router();

router.get("/", controller.getAllBooks);
router.post("/", controller.createBook);
router.get("/:id", controller.getBooksById);
router.put("/:id", controller.updateBookById);
router.delete("/:id", controller.deleteBookById);

module.exports = router;