const { Carrito, Producto, Color } = require('../../db');

module.exports = async () => {
  try {    
    const carritoExistente = await Carrito.findAll({
      where: {
        pagado: true,
      },
    });

    if (!carritoExistente.length) {
      throw new Error(`No existe un historial`);
    }


    const productos = [];

    for (const carrito of carritoExistente) {
      for (const producto of carrito.dataValues.productos) {
        const productoDetalles = await Producto.findByPk(producto.productoId, {
          attributes: ['name', 'precio_venta'],
        });
        const colorDetalles = await Color.findByPk(producto.colorId, {
          attributes: ['name'],
        });

        if (productoDetalles) {
          productos.push({
            colorId: producto.colorId,
            colorName: colorDetalles.name,
            cantidad: producto.cantidad,
            productoId: producto.productoId,
            productoName: productoDetalles.name,
            productoPrecio: productoDetalles.precio_venta,
            inventarioId: producto.inventarioId,
            fechaCompra: carrito.dataValues.fechaCompra,
          });
        }
      }
    }


    return productos;
  } catch (error) {
    console.error('Error al ver registro en el carrito:', error.message);
    throw error;
  }
};
