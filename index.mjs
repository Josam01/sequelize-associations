import Express from "express"
import { sequelize } from "./database.mjs"
import { getAllPlayers,getOnePlayer,addOnePlayer, updatePlayer, deletePlayer} from "./controllers/playerControllers.mjs"
import { createOneClub, getAllClubs, getOneClub } from "./controllers/clubscontrollers.mjs"
// import { Club,Player } from "./models.mjs"

const app = Express()
const port = 2006

app.use(Express.json())

// Club.hasMany(Player,{foreignKey:'clubid'});
// Player.belongsTo(Club)

app.get('/players',getAllPlayers)

app.get('/players/:id',getOnePlayer)

app.post('/players',addOnePlayer)

app.put('/players/:id',updatePlayer)

app.delete('/players/:id',deletePlayer)

app.get('/clubs',getAllClubs)

app.get('/clubs/:id',getOneClub)

app.post('/clubs',createOneClub)


app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
    console.log('syncing database')
    sequelize.sync()
})

