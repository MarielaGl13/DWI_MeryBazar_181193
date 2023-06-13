const {Router}=require('express');
const clothesController=require('../controllers/clothes.controller');

const router=Router();
router.get('/',clothesController.obtenerProductos); 
router.get('/:cb',clothesController.obtenerProducto);
router.post('/insert',clothesController.insertarProducto);
router.put('/actualizar/:cb',clothesController.actualizarProducto);
router.delete('/borrar/:cb',clothesController.eliminarProducto);
module.exports=router; 