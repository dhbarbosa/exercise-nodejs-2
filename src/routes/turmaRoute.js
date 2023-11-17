import express from 'express'
import Turma from '../models/Turma.js'

const router = express.Router()
const isLoggedIn = true
router.get('/', (req, res) => {
    Turma.findAll().then((turmas) => {
        turmas = turmas.map((turma) => {
            return turma.toJSON()
        })
        res.render('admin/turma/turma', { turmas: turmas, isLoggedIn })
    })
})

router.get('/create', (req, res) => {
    res.render('admin/turma/addturma')
})

router.get('/edit/:id', (req, res) => {
    Turma.findAll({
        where: { id_turma: req.params.id },
    }).then((turmas) => {
        turmas = turmas.map((turma) => {
            return turma.toJSON()
        })
        res.render('admin/turma/editturma', { turmas: turmas, isLoggedIn })
    })
})

router.post('/create', (req, res) => {
    Turma.create({
        descricao: req.body.descricao,
    })
        .then(() => {
            res.redirect('/professor/turma/')
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro)
        })
})

router.post('/edit', (req, res) => {
    Turma.update(
        {
            descricao: req.body.descricao,
        },

        {
            where: { id_turma: req.body.id_turma },
        }
    )
        .then(() => {
            res.redirect('/professor/turma/')
        })
        .catch((erro) => {
            res.send('Esta turma não existe ' + erro)
        })
})

router.get('/delete/:id', (req, res) => {
    console.log(req.params.id)
    Turma.destroy({ where: { id_turma: req.params.id } })
        .then(() => {
            res.redirect('/professor/turma/')
        })
        .catch((err) => {
            res.render('Esse turma não existe', { isLoggedIn })
        })
})

export default router
