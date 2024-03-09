import Express from "express";
import { sequelize } from "./database.mjs";
import {getAllPlayers,getOnePlayer,addOnePlayer,updatePlayer,deletePlayer} from "./controllers/playerControllers.mjs";
import {createOneClub,getAllClubs,getOneClub} from "./controllers/clubscontrollers.mjs";

const app = Express();
const port = 2006;

app.use(Express.json());

// CREATE CLUBS
app.post('/clubs', createOneClub);

app.get('/clubs', getAllClubs);

app.get('/clubs/:id', getOneClub);

// GET A ONE PLAYER
app.get('/players/:id', getOnePlayer);

// ADD ONE PLAYER
app.post('/players', addOnePlayer);

// GET ALL PLAYERS
app.get('/players', getAllPlayers);

// UPDATE A PLAYER
app.put('/players/:id', updatePlayer);

// DELETE A PLAYER
app.delete('/players/:id', deletePlayer);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
  console.log('Syncing database');
  sequelize.sync();
});
