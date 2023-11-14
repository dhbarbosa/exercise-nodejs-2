import express from 'express'
import Turma from '../models/Turma.js'

const router = express.Router()

router.get('/turma', (req, res) => {
    Turma.findAll().then((turmas) => {
        turmas = turmas.map((turma) => {
            return turma.toJSON()
        })
        res.render('admin/turma/turma', { turmas: turmas })
    })
})

router.get('/turma/add', (req, res) => {
    res.render('admin/turma/addturma')
})

router.get('/editar_turma/:id', (req, res) => {
    Turma.findAll({
        where: { id_turma: req.params.id },
    }).then((turmas) => {
        turmas = turmas.map((turma) => {
            return turma.toJSON()
        })
        res.render('admin/turma/editturma', { turmas: turmas })
    })
})

router.post('/turma/nova', (req, res) => {
    Turma.create({
        descricao: req.body.descricao,
    })
        .then(() => {
            res.redirect('/rota_turma/turma')
        })
        .catch((erro) => {
            res.send('Houve um erro: ' + erro)
        })
})

router.post('/turma/editar_turma', (req, res) => {
    Turma.update(
        {
            descricao: req.body.descricao,
        },

        {
            where: { id_turma: req.body.id_turma },
        }
    )
        .then(() => {
            res.redirect('/rota_turma/turma')
        })
        .catch((erro) => {
            res.send('Esta turma não existe ' + erro)
        })
})

router.get('/deletar_turma/:id', (req, res) => {
    console.log(req.params.id)
    Turma.destroy({ where: { id_turma: req.params.id } })
        .then(() => {
            res.redirect('/rota_turma/turma')
        })
        .catch((err) => {
            res.render('Esse turma não existe')
        })
})

export default router
