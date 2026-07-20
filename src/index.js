require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); //leer el json
const PORT = 3000;
const peliculasRoutes = require('./routes/peliculas.routes');

app.get('/', (req, res) => {
    res.send('¡El servidor de películas está funcionando a la perfección!');
});
 app.use('/peliculas', peliculasRoutes)


app.listen(PORT, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PORT}`);
}); 

