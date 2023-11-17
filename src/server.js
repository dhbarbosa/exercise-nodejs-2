import express from 'express'
import 'dotenv/config'
import rotuerTurma from './routes/turmaRoute.js'
import routerAluno from './routes/alunoRoute.js'
import handlebars from 'express-handlebars'
import routerProf from './routes/professorRouter.js'
import session from 'express-session'
import authentication from './routes/middleware/userAuthentic.js'

const app = express()
app.use(
    session({ secret: 'seuSegredo', resave: false, saveUninitialized: true })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use('/professor/turma', authentication, rotuerTurma)

app.use('/professor/aluno', authentication, routerAluno)

app.use('/professor', routerProf)

app.get('/', (req, res) => {
    res.render('home')
})

export default app
