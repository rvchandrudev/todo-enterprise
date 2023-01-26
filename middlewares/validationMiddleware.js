const {validationResult} = require('express-validator');

const validationMiddleware = (req,res,next) => {

    const result = validationResult(req);
    if(result.errors.length){
        return res.status(400).send(result.errors[0])
    }
    next();
}

module.exports = {validationMiddleware};