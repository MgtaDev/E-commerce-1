const { Proveedor } = require('../../db');

module.exports = async () => {
  try {
    const proveedores = await Proveedor.findAll({
      attributes: ['id', 'nombre', 'link_catalogo', 'asesor', 'celular','activa'],
    });
    return proveedores;
  } catch (error) {
    console.error('Error al obtener los Proveedores:', error.message);
    throw error;
  }
};
