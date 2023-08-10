const { Favoritos } = require('../../db');

module.exports = async (correo_electronico) => {
  try {
    
    const favoritos = await Cliente.findAll({
      where: {
        correo_electronico,
      },
    });


    const favoritoIds = favoritos.map((favorito) => {
        return {
            id: `fav-${favorito.id}`,
            correo_electronico: `cli-${favorito.correo_electronico}`,
            productoId: `prod-${favorito.productoId}`
        }
    });
    return favoritoIds;
  } catch (error) {
    console.error('Error al obtener los IDs de los favoritos:', error.message);
    throw error;
  }
};
