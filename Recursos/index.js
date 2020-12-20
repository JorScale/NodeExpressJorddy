
//Llamo a los modulos de express 
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const puerto = process.env.PORT || 4000;
require('./Config/config.js');
const URL_DB = `mongodb+srv://JorScale:${pwdbd}@jorddynode.ngxc8.mongodb.net/${cruster}?retryWrites=true&w=majority`

//Configuraciones
//Asignando un puerto
app.set('port', puerto);

app.set('views', path.join(__dirname,'/vistas'));
app.engine('html',require('ejs').renderFile);
//Ayuda usar un js y pasarlo a html
app.set('view engine', 'ejs');

//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Rutas
app.use(require('./Rutas/index.js'));

mongoose.connect(URL_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {
    if(err) throw err;
    console.log('BD conectada...');
});
//Archivos estaticos
//Cualquier archivo que coloque en la carpeta va ser accesible del navegador
app.use(express.static(path.join(__dirname, 'Publico' )));
//Abro un puerto
app.listen(app.get('port'),()=>{
    console.log(`El puerto ${app.get('port')} esta abierto`);
});

