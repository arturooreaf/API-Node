const express = require('express');
const app = express();
const PORT = 3000;

// Tu primera ruta (El mostrador de recepción)
app.get('/', (req, res) => {
    res.send('¡El servidor de películas está funcionando a la perfección!');
});

// Le decimos al servidor que se quede escuchando
app.listen(PORT, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PORT}`);
}); 