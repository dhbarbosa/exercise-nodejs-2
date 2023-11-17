import express from 'express'
import Turma from '../models/Turma.js'
import Aluno from '../models/Aluno.js'

const router = express.Router()
const isLoggedIn = true

router.get('/', (req, res) => {
    Aluno.sequelize
        .query(
            'select * from selecAluno',

            { model: Aluno }
        )
        .then(function (alunos) {
            var nalunos = JSON.parse(JSON.stringify(alunos))

            res.render('admin/aluno/aluno', { alunos: nalunos, isLoggedIn })
        })
})

router.get('/create', (req, res) => {
    Turma.findAll().then((turmas) => {
        var nturmas = JSON.parse(JSON.stringify(turmas))

        res.render('admin/aluno/addaluno', { turmas: nturmas, isLoggedIn })
    })
})

router.get('/edit/:id', (req, res) => {
    Aluno.findAll({ where: { id_aluno: req.params.id } }).then((alunos) => {
        Turma.findAll().then((turmas) => {
            var nturmas = JSON.parse(JSON.stringify(turmas))

            var nalunos = JSON.parse(JSON.stringify(alunos))

            res.render('admin/aluno/editaluno', {
                alunos: nalunos,
                turmas: nturmas,
            })
        })
    })
})

router.post('/create', (req, res) => {
    Aluno.create({
        matricula: req.body.matricula,

        nome: req.body.nome,

        fk_turma: req.body.fk_turma,
    })
        .then(() => {
            res.redirect('/professor/aluno/')
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro)
        })
})

router.post('/edit', (req, res) => {
    Aluno.update(
        {
            matricula: req.body.matricula,

            nome: req.body.nome,

            fk_turma: req.body.fk_turma,
        },

        {
            where: { id_aluno: req.body.id_aluno },
        }
    )
        .then(() => {
            res.redirect('/professor/aluno/')
        })
        .catch((erro) => {
            res.send('Este aluno não existe ' + erro)
        })
})

router.get('/delete/:id', (req, res) => {
    Aluno.destroy({ where: { id_aluno: req.params.id } })
        .then(() => {
            res.redirect('/professor/aluno/')
        })
        .catch((err) => {
            res.render('Esse aluno não existe')
        })
})

export default router
