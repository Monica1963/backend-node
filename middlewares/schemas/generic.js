const Joi = require('@hapi/joi');
const joi = require('@hapi/joi');

const schemas = {
    validateId: Joi.number().positive().required(),
};

module.exports = schemas;