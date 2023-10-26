const { getTeams, addTeam } = require('../db/consultas')


const obtenerEquipos = async (req, res) => {
    const equipos = await getTeams()
    res.json(equipos)
}

const agregarEquipo = async (req, res) => {
    try{
      
    const equipo = req.body
    await addTeam(equipo)
    res.status(201).json({ message: "Equipo agregado con éxito" })
    
    }catch(error){
        console.log(error)
        res.status(400).json({message: "Error al agregar equipo"})

    }
}

module.exports = { obtenerEquipos, agregarEquipo }