const mongoose = require('mongoose');
const Book = require('./books')

const url = "mongodb://localhost/books";

const connectDatabase = async () =>{
    try {
       return await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
       }).then(()=> console.log("database is connected"))
       
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { connectDatabase, Book };