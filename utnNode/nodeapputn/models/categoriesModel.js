const mongoose = require("../bin/mongodb");
const errorMsj = require('../utils/errorsMsj')

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        unique:true,        
        required:[true,errorMsj.GENERAL.campoObl]
    }
});

categorySchema.statics.findBydIdAndValidate = async function(_id){
    const document = await this.findById(_id);
    if(!document){
        return{
            error:true,
            message:"No existe categoria"
        }
    }
    return document;
}
module.exports = mongoose.model("categories", categorySchema)