
//Llamo a los modulos de express 
const express = require('express');
const app = express();
const path = require('path');

const puerto = process.env.PORT || 4000;

//Configuraciones
//Asignando un puerto
app.set('port', puerto);

app.set('views', path.join(__dirname,'/vistas'));
app.engine('html',require('ejs').renderFile);
//Ayuda usar un js y pasarlo a html
app.set('view engine', 'ejs');


//Rutas
app.use(require('./Rutas/index.js'));

//Archivos estaticos
//Cualquier archivo que coloque en la carpeta va ser accesible del navegador
app.use(express.static(path.join(__dirname, 'Publico' )));
//Abro un puerto
app.listen(app.get('port'),()=>{
    console.log(`El puerto ${app.get('port')} esta abierto`);
});

