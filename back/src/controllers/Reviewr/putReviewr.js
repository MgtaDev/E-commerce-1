const {Reviwers} = require('../../db');

module.exports  = async(productoId, rating, comentario) => {
    try{
        const clienteReseña = await Reviwers.findOne({
            where:{
                productoId:productoId
            }
        })
        if(!clienteReseña){
            return('la reseña del cliente no existe')
        }
        await Reviwers.update({
            rating,
            comentario,
            fecha: new Date(),
        },
        {
            where: {productoId:productoId}
        }
        )
        
        const reseñaActulizada = await Reviwers.findOne({
            where: {productoId:productoId}
        })
        return reseñaActulizada
    }catch(error){
        console.error('Error al actulizar la reseña en la base de datos:', error.message);
        throw error;
    }
}