import { Model,DataTypes } from "sequelize";
import { sequelize } from "./database.mjs";



export class Club extends Model{static associate(models){
    this.hasMany(Player);
}}
Club.init({

    name:DataTypes.STRING,
    coach:DataTypes.STRING
},{sequelize,modelName:"club"});




export class Player extends Model{static associate(models){
    this.belongsTo(Club,{as:"club"});
}}
Player.init ({
  
  name:DataTypes.STRING,
  clubId:{
    type:DataTypes.INTEGER,
    references:{
        model:"club",
        key:"id",
    }
  }
}
   
, {sequelize,modelName:"player"})

