const { Reviwers } = require('../../db');

module.exports = async (productoId) => {
    try {
        const reseñas = await Reviwers.findAll({
            where: {
                productoId: productoId
            }
        });

        if (!reseñas || reseñas.length === 0) {
            throw new Error(`Las reseñas del producto con ID ${productoId} no se encontraron`);
        }

        return reseñas;
    } catch (error) {
        console.error('Error al traer las reseñas en la base de datos:', error.message);
        throw error;
    }
};
