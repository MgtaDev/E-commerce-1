const { Favoritos, Producto, Cliente } = require('../../db');

module.exports = async (favorito) => {
  try {

    const {clienteId,productoId} = favorito

    // Verificar si el cliente existe
    const clienteExistente = await Cliente.findByPk(clienteId);
    if (!clienteExistente) {
      throw new Error(`El cliente con ID ${clienteId} no existe.`);
    }

    // Verificar si el producto existe
    const productoExistente = await Producto.findByPk(productoId);
    if (!productoExistente) {
      throw new Error(`El producto con ID ${productoId} no existe.`);
    }

    // Verificar si el producto favorito ya existe para este cliente
    const favoritoExistente = await Favoritos.findOne({
      where: {
        clienteId,
        productoId,
      },
    });

    if (favoritoExistente) {
      throw new Error('El producto ya está en la lista de favoritos del cliente.');
    }

    // Crear el registro de producto favorito en la base de datos
    let nuevoFavorito = await Favoritos.create({
      clienteId,
      productoId,
    });

    nuevoFavorito = {
        id: `fav-${nuevoFavorito.id}`,
        clienteId: `cli-${nuevoFavorito.clienteId}`,
        productoId: `prod-${nuevoFavorito.productoId}`
    }


    return nuevoFavorito;
  } catch (error) {
    console.error('Error al agregar producto favorito:', error.message);
    throw error;
  }
};
