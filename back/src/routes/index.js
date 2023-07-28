const { Router } = require('express');
const categoriaRouter = require('./categoriaRouter')
const subCategoriaRouter = require('./subCategoriaRouter')
const marcaRouter = require('./marcaRouter')


const router = Router();


router.use('/categoria',categoriaRouter)
router.use('/subcategoria',subCategoriaRouter)
router.use('/marca',marcaRouter)



module.exports = router;

