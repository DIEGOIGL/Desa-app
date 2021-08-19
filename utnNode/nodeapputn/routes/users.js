var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

router.post('/login', usersController.login);
router.post('/create', usersController.create);
router.put('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, usersController.update);
router.delete('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, usersController.delete);

module.exports = router;
