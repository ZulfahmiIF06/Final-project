const Joi = require("joi");

const createValidation = (data) => {
    const productSchema = Joi.object({
        npm: Joi.number().required(),
        nama: Joi.string().required(),
        kelas: Joi.string().required(),
        kategori: Joi.string().required(),
    });

    return productSchema.validate(data);
};

module.exports = {
    createValidation,
};