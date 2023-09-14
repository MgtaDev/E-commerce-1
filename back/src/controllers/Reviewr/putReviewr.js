const { Reviwers } = require('../../db');

module.exports = async (currentUserId, productId, rating, comentario) => {
    try {
        const clienteReseña = await Reviwers.findOne({
            where: {
                clienteId: currentUserId,
                productoId: productId
            }
        });

        if (!clienteReseña) {
            return 'La reseña del cliente no existe';
        }

        await clienteReseña.update({
            rating,
            comentario,
            fecha: new Date()
        });

        return clienteReseña;
    } catch (error) {
        console.error('Error al actualizar la reseña en la base de datos:', error.message);
        throw error;
    }
};