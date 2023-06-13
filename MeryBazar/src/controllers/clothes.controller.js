const Clothe=require('../models/clothe.model');
const clothesController={};
clothesController.obtenerProductos=async(req,res)=>{
    const clothes=await Clothe.find();
    res.json(clothes);
};
clothesController.obtenerProducto=async(req,res)=>{
    const clothe=await Clothe.findOne({codigobarras:req.params.cb});
    if (clothe!=null)
        res.json(clothe);
    else
        res.json({status:"Not Found"});    
};
clothesController.insertarProducto=async(req,res)=>{
    const productoInsertado=new Clothe(req.body);
    await productoInsertado.save();
    res.json({
        status:"Producto insertado"
    });
};
clothesController.actualizarProducto=async(req,res)=>{
    const resp = await Clothe.findOneAndUpdate({codigobarras:req.params.cb},req.body);
    if(res!=null)
        res.json({status:"Producto Actualizado"});
    else
        res.json({status:"No ENCONTRADO"});
};
clothesController.eliminarProducto=async(req,res)=>{
    const resp = await Clothe.findOneAndDelete({codigobarras:req.params.cb});
    if(res!=null)
        res.json({status:"Producto Eliminado"});
    else
        res.json({status:"PRODUCTO NO ENCONTRADO"});
};
module.exports=clothesController;