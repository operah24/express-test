const {Book} = require("../models")

const addBook = async(req, res) =>{
    try {
        const { title, author, image} = req.body;
        const book = new Book({
            title:title,
            author:author,
            image:image
        });
        await book.save();
        return res.status(201).json({
            book
        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            error:error
        })
    }
}

const getAllBooks = async(req, res)=>{
    try {
        const books = await Book.find();
        return res.status(200).json({
            books
        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            error:error
        })
    }
}

const getBookById = async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({
                message:"Book not found!"
            })
        }
        return res.status(200).json({
            book
        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            error:error
        })
    }
}

const editBook = async(req, res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({
                message:"Book not found!"
            })
        }
        book.author= req.body.author;
        book.title = req.body.title;
        await book.save();
        return res.status(200).json({
            book
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"error",
            error:error
        })
    }
}

const deleteBook = async(req, res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({
                message:"Book not found!"
            })
        }
        return res.status(200).json({
            message:"Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            message:"error",
            error:error
        })
    }
}    

module.exports = { addBook, getAllBooks, getBookById, editBook, deleteBook  }


// const books = require("../utils/data")

// const getAllBooks = (req, res)=>{
//     return res.status(200).json({
//         books
//     })
// }

// const getBookById =  (req, res)=>{
//     const {id} = req.params;
//     const book = books.find(({id : bookId})=> bookId === Number(id));
//     if(!book){
//         return res.status(200).json({
//             message:"Book not found!"
//         })
//     }
//     return res.status(200).json({
//         book
//     })
    
// }

// const addBook = (req, res)=>{
//     const { title, author } = req.body;
//     console.log(title, author)

//     const data = {
//         title,
//         author,
//         id: Number(books.length + 1)
//     }
//     books.push(data);
//     return res.status(200).json({
//         book:data
//     })
// }

// const editBook = (req, res)=>{
//     const {id} = req.params;
//     const book = books.find(({id : bookId})=> bookId === Number(id));
//     if(!book){
//         return res.status(200).json({
//             message:"Book not found!"
//         })
//     }
//     const { title, author }= req.body;
//     book.author = author;
//     book.title = title;

//     return res.status(200).json({
//         book
//     })
    
// }

// const deleteBook = (req, res)=>{
//     const {id} = req.params;
//     const index = books.findIndex(({id : bookId})=> bookId === Number(id));
//     books.splice(index, 1)

//     return res.status(200).json({
//         message:"Book deleted successfully"
//     })
// }


// module.exports = {
//     getAllBooks,
//     getBookById,
//     addBook,
//     deleteBook,
//     editBook
// }