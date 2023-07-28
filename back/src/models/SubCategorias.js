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
    categoriaId: { // Cambia el nombre de la columna a categoriaId
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: false });

  Subcategoria.belongsTo(sequelize.models.categoria, {
    foreignKey: {
      allowNull: false,
      name: 'categoriaId' // Cambia el nombre de la columna a categoriaId
    }
  });

  return Subcategoria;
};
