const express = require('express');
const ConectarBD = require('../config/db');
const cors = require ('cors');

const app = express();
const port = process.env.PORT || 5000;

// Enlazar conexión con la base de datos.
ConectarBD();
app.use(cors());

// Habilitamos express.json
app.use(express.json());

// rutas aplicacion 
app.use('/api/citas', require('../routes/citasRuta'));

// Rutas de prueba y configuración
app.get('/', (req, res) =>{
    res.send("Bienvenido estamos desde al navegador");
})

app.listen(port, () => console.log('Estamos conectados por el servidor con el puerto', port));

