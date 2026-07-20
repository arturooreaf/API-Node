require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); //leer el json
const db = require('./models/db');
const PORT = 3000;

// Tu primera ruta (El mostrador de recepción)
app.get('/', (req, res) => {
    res.send('¡El servidor de películas está funcionando a la perfección!');
});
//Ruta para obtener todas las películas
//READ 
app.get('/peliculas', async (req, res) => {
    try {
        const resultado = await db.query('SELECT * FROM peliculas');
        res.json(resultado.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
});

// Le decimos al servidor que se quede escuchando
app.listen(PORT, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PORT}`);
}); 

