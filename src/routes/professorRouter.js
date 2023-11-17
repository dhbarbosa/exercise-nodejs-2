import express from 'express'
import Professor from '../models/Professor.js'
import authentication from './middleware/userAuthentic.js'
const router = express.Router()

router.post('/create', (req, res) => {
    Professor.create({
        nome: req.body.nome,

        email: req.body.email,

        password: req.body.password,
    })
        .then(() => {
            res.redirect('/')
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro)
        })
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const professor = await Professor.findOne({ where: { email } })
        if (
            professor.dataValues.email === email &&
            professor.dataValues.password === password
        ) {
            req.session.username = professor.dataValues.email
            const returnTo = req.session.returnTo || '/professor/'
            delete req.session.returnTo
            res.redirect(returnTo)
        } else {
            res.render('home', { error: 'Credenciais inválidas' })
        }
    } catch (error) {
        console.error(error)
        res.render('home', { error: 'Credenciais inválidas' })
    }
})

router.get('/', authentication, (req, res) => {
    const isLoggedIn = true

    Professor.findAll({ where: { email: req.session.username } }).then(
        (professor) => {
            console.log(professor)
            res.render('admin/logado', {
                isLoggedIn,
                nprofessor: professor,
            })
        }
    )
})

export default router
