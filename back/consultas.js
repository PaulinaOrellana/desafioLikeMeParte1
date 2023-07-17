const { Pool } = require("pg")

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password:'amapola',
    database:'likeme',
    allowExitOnIdle: true
})

const getPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
};

const agregarPost = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)";
    const values = [titulo, img, descripcion];
    const result = await pool.query(consulta, values);
    console.log("Película Agregada");
};

module.exports = {
    getPosts,
    agregarPost
}