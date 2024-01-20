import { sequelize } from "../database.mjs"
import { Club,Player } from "../models.mjs"

export const getAllClubs = async(req,res)=>{
    const clubs = await Club.findByAll({include:Player})
    res.json(clubs)
} 

export const getOneClub = async(req,res)=>{
    const club = await Club.findByPk(req.params.id,{include:Player})
    res.json(club)
}

export const createOneClub = async(req,res)=>{
    const club = await Club.create(req.body)
    res.json(club)
}



