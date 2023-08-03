const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Definimos el modelo Producto
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    precio_compra: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    porcentaje_ganancia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    referencia_proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
    // tamañoId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // proveedorId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  { tableName: 'producto',timestamps: false });

  // Establecemos las relaciones con otros modelos
  Producto.belongsTo(sequelize.models.Categoria, {
    foreignKey: {
      allowNull: false,
      name: 'categoriaId',
    }
  });

  Producto.belongsTo(sequelize.models.Marca, {
    foreignKey: {
      allowNull: false,
      name: 'marcaId',
    }
  });

  // Producto.belongsTo(sequelize.models.Size, {
  //   foreignKey: {
  //     allowNull: false,
  //     name: 'tamañoId',
  //   }
  // });

  // Descomenta una a la vez para verificar qué asociación está causando el problema
  // Producto.belongsTo(sequelize.models.Proveedor, { 
  //   foreignKey: {
  //     allowNull: false,
  //     name: 'proveedorId',
  //   }
  // });

  // Producto.belongsToMany(sequelize.models.Subcategoria, { 
  //   through: 'producto_subcategoria',
  //   foreignKey: 'productoId',
  //   otherKey: 'subcategoriaId',
  // });

  return Producto;
};
