import { Club, Player } from "../models.mjs";


export const getAllClubs = async (req, res) => {
    try {
      const clubs = await Club.findAll({ include: Player });
      res.json(clubs);
    } catch (error) {
      console.error('Error getting all clubs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

export const getOneClub = async (req, res) => {
  try {
    const club = await Club.findByPk(req.params.id, { include: { model: Player, as: "players" } });
    if (!club) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.json(club);
  } catch (error) {
    console.error('Error getting one club:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createOneClub = async (req, res) => {
  try {
    const {name, coach} = req.body;
    const newClub = await Club.create({
      name,
      coach,
    });
    res.json(newClub);
  } catch (error) {
    console.error('Error creating club:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



