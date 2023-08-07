const { Producto, Subcategoria } = require('../../db');
const { Sequelize } = require('sequelize');


module.exports = async (name) => {

  let producto = await Producto.findAll({
    where:{
      name:{
        [Sequelize.Op.like]: `%${name.toLowerCase()}%`,
      },
      include: 
      {
        model: Subcategoria,
        attributes: ['name'],
        through: { attributes: [] },
      },
    }
  })

  return producto
};

