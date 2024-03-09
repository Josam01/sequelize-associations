import { Model, DataTypes } from "sequelize";
import { sequelize } from "./database.mjs";



// FOR CLUB
export class Club extends Model {
  static associate(models) {
      this.hasMany(models.Player, { foreignKey: 'clubId' }); 
    }
}
Club.init(
  {
    name: DataTypes.STRING,
    coach: DataTypes.STRING,
  },
  { sequelize, modelName: "club" }
);


// FOR PLAYeRS
export class Player extends Model {
  static associate(models) {
      this.belongsTo(models.Club, { foreignKey: 'clubId', as: "club" });
    }
}
Player.init(
  {
    name: DataTypes.STRING,
    clubId: {
      type: DataTypes.INTEGER,
      references: {
        model: "club",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "player" }
);

//Bi-directional associations. CHECK README
Club.hasMany(Player, { foreignKey: 'clubId' });
Player.belongsTo(Club, { foreignKey: 'clubId', as: "club" });

