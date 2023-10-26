const { Pool } = require('pg');
const {secretKey} = require('../utils')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: secretKey,
    port: 5432,
    database: 'futscript',
    allowExitOnIdle: true
})

const getTeams = async () => {
    try{
        const response = await pool.query('SELECT * FROM equipos')
        return response.rows
        
    }catch(error){
        console.log(error)
    }

}

const getPlayers = async (teamID) => {
    try{
        const response = await pool.query('SELECT * FROM jugadores WHERE id_equipo = $1', [teamID])
        return response.rows

    }catch(error){
        console.log(error)
    }

}

const addTeam = async (equipo) => {
    const { name } = equipo;
    const response = await pool.query('INSERT INTO equipos (name) VALUES ($1)', [name])
    return response.rows;
 
}

const addPlayer = async ({ jugador, teamID }) => {
    try{
        
        const {name, position} = jugador;
        const response = await pool.query('INSERT INTO jugadores (name, position, id_equipo) VALUES ($1, $2, $3)', [name, position, teamID])
        return response.rows;

    }catch(error){
        console.log(error)
    }

}

module.exports = { getTeams, addTeam, getPlayers, addPlayer }