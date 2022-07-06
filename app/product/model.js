const sequelize = require('../../config/sequelize')
const { DataTypes } = require('sequelize');


const Product = sequelize.define('Product', {
  // Model attributes are defined here
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
    // allowNull defaults to true
  },
  Image_url: {
    type: DataTypes.TEXT,
  },
}, {
  // Other model options go here
});

module.exports = Product;