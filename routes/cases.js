const {Router} = require('express');
const router = Router();
const {all , single} = require('../controllers/cases');
//const { validateId } = require('./../middlewares/actions/generic');

//const { validateCreate } = require('./../middlewares/actions/cases');



router.get("/", all);
router.get("/:id", single);
//router.post("/", validateCreate, create);


module.exports = router;








