const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

//Criar a tabela
//Pagamento.sync({force: true})

module.exports = Pagamento