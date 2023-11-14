import express from 'express'
import 'dotenv/config'
import rota_turma from './routes/turmaRoute.js'
import rota_aluno from './routes/alunoRoute.js'
import handlebars from 'express-handlebars'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use('/rota_turma', rota_turma)
app.use('/rota_aluno', rota_aluno)

app.get('/', (req, res) => {
    res.render('home')
})

export default app
