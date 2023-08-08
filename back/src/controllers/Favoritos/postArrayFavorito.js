const { Favoritos, Producto, Cliente } = require('../../db');

module.exports = async (favoritosArray) => {
  try {
    const nuevosFavoritos = [];

    async function crearFavorito(favorito) {
      const { clienteId, productoId } = favorito;

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
        throw new Error(`El producto con ID ${productoId} ya está en la lista de favoritos del cliente con ID ${clienteId}.`);
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

      nuevosFavoritos.push(nuevoFavorito);
    }

    await Promise.all(favoritosArray.map(crearFavorito));

    return nuevosFavoritos;
  } catch (error) {
    console.error('Error al agregar productos favoritos:', error.message);
    throw error;
  }
};
