var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET users listing. */
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

module.exports = router;
