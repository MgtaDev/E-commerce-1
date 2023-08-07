const { Producto, Subcategoria } = require('../../db');

module.exports = async () => {
  try {
    
    const productos = await Producto.findAll({
      include: {
        model: Subcategoria,
        attributes: ['name'],
        through: { attributes: [] },
      },
    });

    console.log(productos);

    productos.forEach((producto) => {
      producto.dataValues.id = `col-${producto.dataValues.id}`;
    });

    return productos;
  } catch (error) {
    console.error('Error al obtener los colores:', error.message);
    throw error;
  }
};
