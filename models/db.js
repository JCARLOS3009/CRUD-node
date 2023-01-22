const Sequelize = require("sequelize")

const sequelize = new Sequelize('name', 'username', 'password',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
