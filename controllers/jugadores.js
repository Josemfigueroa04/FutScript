const { getPlayers, addPlayer } = require('../db/consultas');
const {login} = require('./login')

const obtenerJugadores = async (req, res) => {
    const { teamID } = req.params
    const jugadores = await getPlayers(teamID)
    res.json(jugadores)
}

const registrarJugador = async (req, res) => {
    // const {username} = req.user
    //     if(username !== "admin"){
    //         return res.status(401).json({message: "No autorizado"})
    //     }
    const { teamID } = req.params
    const jugador = req.body
    await addPlayer({ jugador, teamID })
    res.json({ message: "Jugador agregado con éxito" })
}


module.exports = { obtenerJugadores, registrarJugador }