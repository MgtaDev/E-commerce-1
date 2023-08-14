const { Carrito } = require('../../db');

module.exports = async (clienteId) => {
  try {

    // Verificar si ya existe un carrito para el cliente
    const carritoExistente = await Carrito.findOne({
      where: {
        clienteId,
        pagado:false
      },
    });

    if (!carritoExistente) {
      throw new Error(`No existe un carrito para el cliente con ID ${clienteId}.`);
    }

    

    return carritoExistente;
  } catch (error) {
    console.error('Error al agregar registro en el carrito:', error.message);
    throw error;
  }
};
