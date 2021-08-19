const jwt = require("jsonwebtoken")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var categoriesRouter = require('./routes/categories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('secretKey',"utnnode")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  if ((err.name == "MongoError") && (err.code == 11000)){
    res.status(err.status || 500);
    res.json({status:"error",mensaje: "EL usuario ya existe" })
  } else {
    // render the error page
    res.status(err.status || 500);
    //res.json({status:"error",mensaje: err.name })
    res.json({status:"error",mensaje: res.locals.message })
    //res.json({status:"error",mensaje:"Upss, Ha ocurrido un error" })
  }

});

app.validateUser = validateUser;

function validateUser(req,res,next){
  jwt.verify(req.headers['x-access-token'],req.app.get("secretKey"),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      console.log(decoded)
      req.body.tokenData = decoded;
      next();
    }
  })
}

module.exports = app;
