const  mongoose = require("../bin/mongodb")
const errorMsj = require("../utils/errorsMsj")
const validators = require("../utils/validators")
const bcript = require("bcrypt")
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,errorMsj.GENERAL.campoObl]
    },
    pass: {
        type: String,
        required:[true,errorMsj.GENERAL.campoObl] ,
        validate: {
            validator:function (v){
                return validators.PASS.isGoodPass(v)
            },
            message: errorMsj.USER.passBad          
        }
    },
    email:{
        type:String,
        unique:true,
        required:[true,errorMsj.GENERAL.campoObl],
        validate: {
            validator:function (w){
                return validators.EMAIL.isEmail(w)
            },
            message: errorMsj.EMAIL.emailBad
        }         
    },
    surname: {
        type: String,
        required:[true,errorMsj.GENERAL.campoObl]
    },
    alias: {
        type: String,
        unique:true,        
        required:[true,errorMsj.GENERAL.campoObl]
    },
})
usersSchema.pre("save",function(next){
    this.pass = bcript.hashSync(this.pass,10)
    next()
}
)
module.exports = mongoose.model("users",usersSchema)