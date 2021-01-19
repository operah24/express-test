const {validateBook: validateBookSchema} = require('../utils/validator');

const validateBook = (req, res, next)=>{
    const {error} = validateBookSchema(req.body);
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    return next()
}

module.exports = {validateBook}