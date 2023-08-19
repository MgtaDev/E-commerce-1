const { Carrito } = require('../../db');
const postCarrito = require('./postCarrito')

module.exports = async (clienteId,{ pagado }) => {
  try {

    function extractNumberFromString(inputString) {
      const match = inputString.match(/\d+/);
    
      if (match) {
        return parseInt(match[0]);
      }
    
      return null;
    }
    
    clienteId = extractNumberFromString(clienteId);

    const carritoExistente = await Carrito.findOne({
      where: {
        clienteId,
        pagado: false,
      },
    });


    if (!carritoExistente) {
      throw new Error(`Carrito con ID ${clienteId} no encontrado.`);
    }

    const fecha = new Date().toLocaleString();
    

    await Carrito.update({ pagado: pagado, fechaCompra: fecha }, {
        where: {
          clienteId,
          pagado: false,
        },
        });   

        
        

    let carritoenviar = await Carrito.findByPk(carritoExistente.dataValues.id)

    carritoenviar.dataValues.id = `carr-${carritoenviar.dataValues.id}`;

    postCarrito({clienteId:clienteId,productos:[]})

    return carritoenviar
  } catch (error) {
    console.error('Error al marcar el carrito como pagado:', error.message);
    throw error;
  }
};
