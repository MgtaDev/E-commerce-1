const { Producto, Categoria, Marca, Size, Proveedor, Subcategoria } = require('../../db');

module.exports = async (name, descripcion, precio_compra, porcentaje_ganancia, precio_venta, referencia_proveedor, marcaId, categoriaId, tamañoId, proveedorId, subcategoriaId) => {
  try {
    // Verificar si el proveedor existe y está activo
    const proveedorExistente = await Proveedor.findOne({
      where: {
        id: proveedorId,
        activa: true,
      },
    });

    if (!proveedorExistente) {
      throw new Error(`El proveedor con ID ${proveedorId} no existe o no está activo`);
    }

    // Verificar si el tamaño existe y está activo
    const tamañoExistente = await Size.findOne({
      where: {
        id: tamañoId,
        activa: true,
      },
    });

    if (!tamañoExistente) {
      throw new Error(`El tamaño con ID ${tamañoId} no existe o no está activo`);
    }

    // Verificar si la categoría existe y está activa
    const categoriaExistente = await Categoria.findOne({
      where: {
        id: categoriaId,
        activa: true,
      },
    });

    if (!categoriaExistente) {
      throw new Error(`La categoría con ID ${categoriaId} no existe o no está activa`);
    }

    // Verificar si la marca existe y está activa
    const marcaExistente = await Marca.findOne({
      where: {
        id: marcaId,
        activa: true,
      },
    });

    if (!marcaExistente) {
      throw new Error(`La marca con ID ${marcaId} no existe o no está activa`);
    }

    // Crear el producto en la base de datos
    const nuevoProducto = await Producto.create({
      name,
      descripcion,
      precio_compra,
      porcentaje_ganancia,
      precio_venta,
      referencia_proveedor,
      marcaId,
      categoriaId,
      tamañoId,
      proveedorId,
    });

    const subcategoria = await Subcategoria.findAll(
      {where:{ 
        id: subcategoriaId,
        activa:true,
        categoriaId: categoriaId
     }})
    await nuevoProducto.addSubcategoria(subcategoria)

    // Asignar un identificador personalizado (opcional)
    nuevoProducto.dataValues.id = `prod-${nuevoProducto.dataValues.id}`;

    return nuevoProducto;
  } catch (error) {
    console.error('Error al crear el producto:', error.message);
    throw error;
  }
};
