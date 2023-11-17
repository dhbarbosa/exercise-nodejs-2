import db from './db.js'

const Professor = db.sequelize.define(
    'professor',
    {
        id_professor: {
            type: db.Sequelize.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true,
        },
        nome: {
            type: db.Sequelize.STRING,
        },
        email: {
            type: db.Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: db.Sequelize.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
)

export default Professor
