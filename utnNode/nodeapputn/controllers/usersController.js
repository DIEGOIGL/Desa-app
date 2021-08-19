const usersModel = require("../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports={
    create: async function(req, res, next) {
        console.log(req.body)
        try{
            const user = new usersModel({
                name:req.body.name,
                pass:req.body.pass,
                email:req.body.email,
                surname:req.body.surname,
                alias:req.body.alias
            })
            const document = await user.save()
            res.json(document)
        }catch(e){
            next(e)
        }
    },
    update:async function(req, res, next) {
        try{
            console.log(req.body)
            const user = await usersModel.updateOne({_id:req.params.id},req.body)
            res.json(user)
        }catch(e){
            next(e)
        }
      },
    delete: async function(req, res, next) {
          try{
            const user = await usersModel.deleteOne({_id:req.params.id})
            res.json(user)
          }catch(e){
            next(e)
          }
      },
    login: async function(req, res, next) {
        try{
            const user = await usersModel.findOne({email:req.body.email}) 
            if(!user){
                res.json({error:true,message:errorMsj.LOGIN.userInex})
            }
            if(bcrypt.compareSync(req.body.pass,user.pass)){
                const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({error:false,message:"Login Ok",token:token})
                return
            }else{
                res.json({error:true,message:errorMsj.LOGIN.passError})
            }    
        }catch(e){
            next(e)
        }
    }  
}