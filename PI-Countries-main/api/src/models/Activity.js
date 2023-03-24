const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const activity = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM(1,2,3,4,5),  
        allowNull: false,
      },
      duration: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "invierno", "Primavera"),
        allowNull: false,
      },
    });
  };
  

module.export= (activity);
