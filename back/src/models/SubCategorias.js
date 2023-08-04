const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Subcategoria = sequelize.define('Subcategoria', {
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
  { tableName: 'subcategoria',timestamps: false });

  Subcategoria.belongsTo(sequelize.models.Categoria, {
    foreignKey: {
      allowNull: false,
      name: 'categoriaId' // Cambia el nombre de la columna a categoriaId
    }
  });

  return Subcategoria;
};
