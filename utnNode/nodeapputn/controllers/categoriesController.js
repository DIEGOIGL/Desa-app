const categoriesModel = require("../models/categoriesModel")
module.exports={
    getAll:async function(req, res, next) {
      try{
        const documents = await categoriesModel.find()
        res.json(documents)
      }catch(e){
        next(e)
      }
    },
    create:async function(req, res, next) {
        try{
          const document = new categoriesModel({
            category:req.body.category
          })
          const response = await document.save()
          res.json(response)
        }catch(e){
          next(e)
        }
        
    },
    
}