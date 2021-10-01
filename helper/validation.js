const Joi = require('@hapi/joi');
const UUID = Joi.string().guid({ version: [ 'uuidv4', 'uuidv5']});

const passwordValidation = Joi.object({
    password: Joi.string().min(8).max(12).required(),
});

const getOne = Joi.object().keys({id: UUID});
const del = Joi.object({id: UUID});

const insertproduct = Joi.object({
    price_product: Joi.number().min(4).required(),
    name_product: Joi.string().lowercase().required()
});

const updateproduct = Joi.object({
    price_product: Joi.number().min(4).required(),
    name_product: Joi.string().lowercase().required()
});

module.exports = {
    passwordValidation: passwordValidation,
    getOne: getOne,
    delproduct: del,
    updateproduct: updateproduct,
    insertproduct: insertproduct
}