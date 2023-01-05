// Import function from Monster Model
import { getMonsters, getMonsterById, insertMonster, updateMonsterById, deleteMonsterById } from "../models/monsterModel.js";
 
// Get All Monsters
export const showMonsters = (req, res) => {
    getMonsters((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Monster 
export const showMonsterById = (req, res) => {
    getMonsterById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Monster
export const createMonster = (req, res) => {
    const data = req.body;
    insertMonster(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Monster
export const updateMonster = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateMonsterById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Monster
export const deleteMonster = (req, res) => {
    const id = req.params.id;
    deleteMonsterById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

