const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'eduwork-crud',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})

const logger = (async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}) ();

module.exports = sequelize;

