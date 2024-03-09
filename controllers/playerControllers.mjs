import { Club, Player } from "../models.mjs";

export const getAllPlayers = async (req, res) => {
    try {
      const players = await Player.findAll({ include: { model: Club, as: "club" } });
      res.json(players);
    } catch (error) {
      console.error('Error getting all players:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getOnePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    console.error('Error getting one player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addOnePlayer = async (req, res) => {
  try {
    const { name, clubId } = req.body;
    const newPlayer = await Player.create({
      name,
      clubId,
    });
    res.json(newPlayer);
  } catch (error) {
    console.error('Error creating player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      await player.update(req.body);
      res.json({ message: `Player ${player.name} updated successfully` });
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    console.error('Error updating player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      await player.destroy();
      res.json({ message: `Player ${player.name} deleted successfully` });
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    console.error('Error deleting player:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
