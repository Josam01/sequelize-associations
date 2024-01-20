import { Club,Player } from "../models.mjs"

export const getAllPlayers = async(req,res)=>{
    const players = await Player.findAll({include:Club})
    res.json(players)
}

export const getOnePlayer = async(req,res)=>{
    const player = await Player.findByPk(req.params.id)
    res.json(player)
}

export const addOnePlayer = async(req,res)=>{
    const player = await Player.create(req.body)
    res.json(player)
}

export const updatePlayer = async(req,res)=>{
    const player = await Player.findByPk(req.params.id);
    if(player){
        await player.update(req.body);
        res.json(player)
    } else{
        res.status[404].json({message:'user not found'});
    }
}

export const deletePlayer = async(req,res)=>{
    const player =  await Player.findByPk(req.params.id);
    if(player){
        await player.destroy()
        res.json({message:'player deleted succesfully'})
     } else{
        res.status[404].json({message:'player not found'})
    }
}
