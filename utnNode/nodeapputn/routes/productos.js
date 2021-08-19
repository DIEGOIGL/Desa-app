var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();

router.get('/all', productsController.getAll);
router.get('/onlyfeat', productsController.getFeat);
router.get('/:id', productsController.getById);
router.post('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.create);
router.put('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.update);
router.delete('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.delete);

module.exports = router;
