const schema = require('../schemas/generic');

const validateId = (req, res, next) => {
    const { value} = schema.validateId.validate(parseInt(req.params.id));
    //console.log(value);
    isNaN(value) ? res.status(404).json({message: "Requiere un número entero"}) :  next();
};

module.exports = { validateId };