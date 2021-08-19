const mongoose = require("../bin/mongodb")
const errorMsj = require('../utils/errorsMsj')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, errorMsj.GENERAL.campoObl],
        minlength: [2, errorMsj.GENERAL.longMin] 
        },
    sku: {
            type: String,
            required:[true, errorMsj.GENERAL.campoObl]
        },  
    description: {
            type: String,
            required:[true, errorMsj.GENERAL.campoObl]
        },  
    price: {
            type: Number,
            required:[true, errorMsj.GENERAL.campoObl]
        }, 
    feat: { 
            type: Boolean
        },
    idCategory:{
            type:mongoose.Schema.ObjectId,
            ref:"categories"
         },    
})
module.exports = mongoose.model("productos",productSchema)