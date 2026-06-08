const booksTable = require("../models/book.model");
const db = require("../db");
const { eq } = require("drizzle-orm");

exports.getAllBooks = async (req, res) => {
	const books = await db.select().from(booksTable);
	res.json(books);
};

exports.getBookById = async (req, res) => {
	const id = req.params.id;

	const [book] = await db
		.select()
		.from(booksTable)
		.where((table) => eq(table.id, id))
		.limit(1);

	if (!book) return res.status(404).json({ error: `Book not found!` });

	res.json(book);
};

exports.createBook = async (req, res) => {
	const { title, description, authorId } = req.body;

	if (!title || title === "")
		res.status(404).json({ error: "Title is required" });

	const [result] = await db
		.insert(booksTable)
		.values({
			title,
			authorId,
			description,
		})
		.returning({
			id: booksTable.id,
		});

	res.status(201).json({
		message: "Book created successfully",
		id: result.id,
	});
};

exports.updateBookById = async (req, res) => {
	const id = req.params.id;
	const { title, description, authorId } = req.body;

	const [updatedBook] = await db
		.update(booksTable)
		.set({
			title,
			description,
			authorId,
		})
		.where(eq(booksTable.id, id))
		.returning();

	if (!updatedBook) {
		return res.status(404).json({ error: "Book not found!" });
	}

	res.json({
		message: "Book updated successfully!",
		book: updatedBook,
	});
};

exports.deleteBookById = async (req, res) => {
	const id = req.params.id;

	await db.delete(booksTable).where(eq(booksTable.id, id));

	res.json({ message: "Book deleted successfully!" });
};
