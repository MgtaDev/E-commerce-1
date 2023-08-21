const { Producto, Subcategoria, Inventario } = require('../../db');

module.exports = async (page, size) => {
  try {
    const productos = await Producto.findAndCountAll({
      limit: size,
      offset: page * size,
      include: {
        model: Subcategoria,
        attributes: ['name'],
        through: { attributes: [] },
      },
    });


    for (const producto of productos.rows) {
      const inventarios = await Inventario.findAll({
        where: {
          productoId: producto.dataValues.id,
        },
      });
      let cantidad = 0;
      inventarios.forEach((inventario) => {
        cantidad += inventario.cantidad;
      });
      producto.dataValues.cantidad = cantidad;
      producto.dataValues.id = `prod-${producto.dataValues.id}`;
    }

    return productos;
  } catch (error) {
    console.error('Error al obtener los colores:', error.message);
    throw error;
  }
};
