var express = require('express');
const categoriesController = require("../controllers/categoriesController");
var router = express.Router();

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);

module.exports = router;