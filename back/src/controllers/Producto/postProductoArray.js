const { Producto, Marca } = require('../../db');

module.exports = async (array) => {
  const productos = [];

  async function crearProducto(producto) {
    function primerLetraMayuscula(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    producto.name = primerLetraMayuscula(producto.name);

    try {
      if (!producto.name) {
        throw new Error('El nombre del producto es inválido.');
      }

      // Verificar si la marca existe y está activa
      const marcaExistente = await Marca.findOne({
        where: {
          id: producto.marcaId,
          activa: true,
        },
      });

      if (!marcaExistente) {
        // Si la marca no existe o no está activa, lanzar un error
        throw new Error(`La marca con ID ${producto.marcaId} no existe o no está activa`);
      }

      // Crear el producto en la base de datos
      const nuevoProducto = await Producto.create({
        name: producto.name,
        descripcion: producto.descripcion,
        precio_compra: producto.precio_compra,
        porcentaje_ganancia: producto.porcentaje_ganancia,
        precio_venta: producto.precio_venta,
        referencia_proveedor: producto.referencia_proveedor,
        marcaId: producto.marcaId,
        categoriaId: producto.categoriaId,
      });

      nuevoProducto.dataValues.id = `prod-${nuevoProducto.dataValues.id}`;

      productos.push(nuevoProducto);
    } catch (error) {
      console.error('Error al crear el producto:', error.message);
      throw error;
    }
  }

  try {
    await Promise.all(array.map(crearProducto));
    return productos;
  } catch (error) {
    throw error;
  }
};
