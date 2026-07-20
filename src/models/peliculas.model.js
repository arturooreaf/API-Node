const db = require('./db');
// GET ALL 
async function getAll() {
  const resultado = await db.query('SELECT * FROM peliculas');
  return resultado.rows;
}
//POST 
async function create(titulo, director, anio, genero) {
const resultado = await db.query(
    'INSERT INTO peliculas (titulo, director, anio, genero) VALUES ($1, $2, $3, $4) RETURNING *',
    [titulo, director, anio, genero]
  );
return resultado.rows[0];
}
//GET
async function getById(codigo) {
  const resultado = await db.query(
    'SELECT * FROM peliculas WHERE codigo = $1',
  [codigo]
  );
  return resultado.rows[0];
}

//PUT 
async function update (codigo, titulo, director, anio, genero) {
  const resutado = await db.query(
    'UPDATE peliculas SET titulo = $1, director = $2, anio = $3, genero = $4 WHERE codigo = $5 RETURNING * ',
    [titulo, director, anio, genero, codigo ]
  );
  return resutado.rows[0];
  
}
//DELETE
async function remove (codigo) {
  const resultado = await db.query(
    'DELETE FROM peliculas WHERE codigo = $1 RETURNING *' ,
    [codigo]

  );
  return resultado.rows[0];
}


module.exports = {
    getAll,
    create,
    getById,
    remove,
    update
};