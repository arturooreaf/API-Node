const peliculasModel = require('../models/peliculas.model');

async function getAll(req, res) {
    try {

        const peliculas = await peliculasModel.getAll()
        res.json (peliculas)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
}

async function create (req, res) {
    try{
        const {titulo, director, anio, genero}  = req.body;
        const peliculas = await peliculasModel.create(titulo, director, anio, genero)
        res.status(201).json(peliculas);
    }catch (error) {
        console.error(error)
        res.status(500).json({error: 'Error, pelicula no encontrada'})
    }
}

async function getById(req, res) {
    try {

        const { codigo } = req.params;
        const peliculas = await peliculasModel.getById(codigo)

        if(!peliculas) return res.status(404).json({error: 'Error: No encontrado'})
        res.status(200).json(peliculas)
    

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la película' });
    }
}


async function update (req, res) {
    try {
        const {codigo} = req.params;
        const {titulo, director, anio, genero} = req.body;
        const peliculas = await peliculasModel.update(codigo, titulo, director, anio, genero)
        if(!peliculas) return res.status(404).json({error : "No se ha encontrado la pelicula"})
        res.status(200).json(peliculas)
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al actualizar'})

    }   
}


async function remove(req, res) {
    try {
        const { codigo } = req.params;
        const peliculas = await peliculasModel.remove(codigo)
        if (!peliculas) return res.status(404).json({error : "No se ha encontrado la pelicula"});
        res.status(200).json(peliculas);
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al borrar la película' });
    }
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove,
};