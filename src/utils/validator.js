const Joi = require("joi");

const validateBook = (body) =>{
    const bookSchema = Joi.object({
        title:Joi.string().required().min(3),
        author:Joi.string().required().min(3),
        image:Joi.string().required()
    })

    return bookSchema.validate(body)
}

module.exports={ validateBook }