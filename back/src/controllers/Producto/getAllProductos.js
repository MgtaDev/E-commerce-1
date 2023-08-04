const { Producto } = require('../../db');

module.exports = async (page,size) => {
  try {
    const productos = await Producto.findAndCountAll({
      limit: size,
      offset: page * size
    });


    productos.rows.forEach((producto) => {
      producto.dataValues.id = `col-${producto.dataValues.id}`;
    });

    return productos;
  } catch (error) {
    console.error('Error al obtener los colores:', error.message);
    throw error;
  }
};
