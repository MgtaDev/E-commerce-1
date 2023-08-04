const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // Defino el modelo
<<<<<<< HEAD
  sequelize.define(
    "categoria",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      activa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
=======
  const Categoria = sequelize.define('Categoria', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
>>>>>>> 93d48a3680c3396fd64e68c42e18694ec2a5ed88
    },
    { tableName: "categoria", timestamps: false }
  );

  return Categoria;
};
