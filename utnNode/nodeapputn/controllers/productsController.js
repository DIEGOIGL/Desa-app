const productsModel = require("../models/productsModel")
module.exports={
    getFeat: async function(req, res, next) {
        try{
            const documents = await productsModel.find({feat:true}, null, {limit:4})
            res.json(documents)
        }catch(e){
            next(e)
        }
    },
    getAll: async function(req, res, next) {
        try{
            const documents = await productsModel.find()
            res.json(documents)
        }catch(e){
            next(e)
        }
    },
    getById: async function(req, res, next) {
        try{
            const documents = await productsModel.findById(req.params.id)
            res.json(documents)
        }catch(e){
            next(e)
        }
    },
    create: async function(req, res, next) {
        try{
            const product = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                feat:req.body.feat,
                idCategory:req.body.category
            })
            const document = await product.save()
            res.json(document)
        }catch(e){
            next(e)
        }
    },
    update:async function(req, res, next) {
        try{
            const producto = await productsModel.updateOne({_id:req.params.id},req.body)
            res.json(producto)
        }catch(e){
            next(e)
        }
      },
    delete: async function(req, res, next) {
          try{
            const producto = await productsModel.deleteOne({_id:req.params.id})
            res.json(producto)
          }catch(e){
            next(e)
          }
      }
}