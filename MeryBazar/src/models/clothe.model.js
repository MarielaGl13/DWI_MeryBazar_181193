const {Schema,model}=require('mongoose');
const clotheSchema=new Schema({
    codigobarras:{
        type:String,
        unique:true,
        require:true
    },
    descripcion:String,
    marca:String,
    preciocompra:Number,
    precioventa:Number,
    existencias:Number
},{
    versionKey:false,
    timestamps:true
});
module.exports=model('productos',clotheSchema);