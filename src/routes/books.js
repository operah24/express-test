// const express = require("express")
// const {addBook,getBookById,deleteBook,editBook, getAllBooks } = require("../controllers")

// const router = new express.Router();

// router.route("/books").get(getAllBooks).post(addBook)

// router.route('/books/:id').get(getBookById).patch(editBook).delete(deleteBook)


// module.exports = router



const express = require("express")
const {addBook,getBookById,deleteBook,editBook, getAllBooks } = require("../controllers")
const {validateBook} = require('../middlewares/validate')

const router = new express.Router();


router.post("/books", validateBook, addBook)
router.get('/books', getAllBooks)
router.get('/books/:id', getBookById )
router.patch('/books/:id', editBook)
router.delete('/books/:id', deleteBook)


module.exports = router