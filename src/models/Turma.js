import db from './db.js'

const Turma = db.sequelize.define(
    'turma',
    {
        id_turma: {
            type: db.Sequelize.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true,
        },

        descricao: {
            type: db.Sequelize.TEXT,
        },

    },
    { freezeTableName: true }
)

export default Turma
