const { Producto, Categoria, Marca } = require('../../db');

module.exports = async (name, descripcion, precio_compra, porcentaje_ganancia, precio_venta, referencia_proveedor, marcaId, categoriaId) => {
  try {
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
    });

    // Asignar un identificador personalizado (opcional)
    nuevoProducto.dataValues.id = `prod-${nuevoProducto.dataValues.id}`;

    return nuevoProducto;
  } catch (error) {
    console.error('Error al crear el producto:', error.message);
    throw error;
  }
};
