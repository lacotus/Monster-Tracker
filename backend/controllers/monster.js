// Import function from Monster Model
const model = require('../models/monsterModel.js')
 
// Get All Monsters
const showMonsters = (req, res) => {
    model.getMonsters((err, results) => {
        if (err){
            res.send(err);
        }else{
            console.log('made it here');
			res.json(results);
        }
    });
}
 
// Get Single Monster 
const showMonsterById = (req, res) => {
    model.getMonsterById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Monster
const createMonster = (req, res) => {
    const data = req.body;
    model.insertMonster(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Monster
const updateMonster = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    model.updateMonsterById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Monster
const deleteMonster = (req, res) => {
    const id = req.params.id;
    model.deleteMonsterById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Export code
exports.showMonsters = showMonsters;
exports.showMonsterById = showMonsterById;
exports.createMonster = createMonster;
exports.updateMonster = updateMonster;
exports.deleteMonster = deleteMonster;

