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
// CREATE
//Ruta para crear una nueva película
app.post('/peliculas',async (req, res) => { 
    try {
        const { titulo, director, anio, genero } = req.body; // Obtenemos los datos de la película del cuerpo de la solicitud
        const resultado = await db.query(
            'INSERT INTO peliculas (titulo, director, anio, genero) VALUES ($1, $2, $3, $4) RETURNING *', 
            [titulo, director, anio, genero] // Ejecutamos la consulta SQL para insertar la nueva película en la base de datos
        );
        res.status(201).json(resultado.rows[0]); // Enviamos la respuesta en formato JSON con los datos de la película creada   
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la película' });  
    }
});

//Ruta para obtener todas las películas
//READ 
app.get('/peliculas', async (req, res) => { //Ruta para obtener todas las películas
    try {
        const resultado = await db.query('SELECT * FROM peliculas'); // Ejecutamos la consulta SQL para obtener todas las películas 
        res.json(resultado.rows); // Enviamos la respuesta en formato JSON con los resultados de la consulta
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
});

// Le decimos al servidor que se quede escuchando
app.listen(PORT, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PORT}`);
}); 

