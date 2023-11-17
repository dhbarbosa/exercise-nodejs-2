import { Sequelize } from 'sequelize'
import 'dotenv/config'

const connection = {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'escola',
    USER: process.env.USER_DB || 'root',
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD || '123456789',
    HOST: process.env.HOST_MYSQL || 'localhost',
    PORT_DB: process.env.PORT_DB || '3306',
}

const sequelize = new Sequelize(
    connection.MYSQL_DATABASE,
    connection.USER,
    connection.MYSQL_ROOT_PASSWORD,
    {
        host: connection.HOST,
        port: connection.PORT_DB,
        dialect: 'mysql',
        logging: false,
    }
)

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('> Conexão com o banco de dados estabelecida com sucesso.')
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error)
    }
}

export default {
    Sequelize: Sequelize,
    sequelize: sequelize,
    testConnection,
}
