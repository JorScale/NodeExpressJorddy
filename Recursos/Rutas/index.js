const { request } = require('express');
const express = require('express');
const router = express.Router();
const model = require('../models/task')();
//Rutas
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/Contacto', (req, res) => {
    model.find({},(err, tasks)=>{
        if (err) throw err;
        res.render('Contacto.html', {
            task: tasks
        });
    });
});

router.post('/Formulario', (req, res)=>{
    let dato = req.body;
    let tarea = new model({ 
        title: dato.title ,
        description: dato.description,
        status: false});

    tarea.save((err,resbd)=>{
        if(err){
            return res.status(400).json({err});
        }
        res.json({resbd});
    });
})
module.exports = router;