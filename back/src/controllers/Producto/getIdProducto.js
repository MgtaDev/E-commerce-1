const { Producto, Subcategoria } = require('../../db');

module.exports = async (productoId) => {
  try {
    const producto = await Producto.findOne({
      where:{
        id: productoId
      },
      include: 
      {
          model: Subcategoria,
          attributes: ['name'],
          through: { attributes: [] },
        },
    });

    if (!producto) {
      const error = new Error('producto no encontrado.');
      error.status = 404;
      throw error;
    }

    producto.dataValues.id = `prod-${producto.dataValues.id}`;

    return producto;
  } catch (error) {
    console.error('Error al obtener el producto:', error.message);
    throw error;
  }
};
