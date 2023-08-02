const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Subcategoria = sequelize.define('subcategoria', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria', // Nombre de la tabla referenciada
        key: 'id', // Nombre de la columna referenciada en la tabla 'categoria'
      },
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: false });

 
  return Subcategoria;
};
