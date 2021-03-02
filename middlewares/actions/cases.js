const schema = require('../schemas/cases');

const validateCreate = (req, res, next) => {
    const { error, value} = schema.create.validate(req.body);
    error ? res.status(422).json({message: "Datos incorrectos"}) : next();
};

module.exports = { validateCreate };