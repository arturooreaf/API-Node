CREATE TABLE peliculas (
    codigo SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    director VARCHAR(100),
    anio INT,
    genero VARCHAR(50)
);