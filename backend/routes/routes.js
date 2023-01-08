// import express
const express = require('express')

// import function from controller
const data = require('../controllers/monster.js')
 
// init express router
const router = express.Router();

// Home directory TODO

// Get All Monster
router.get('/monsters', data.showMonsters);
 
// Get Single Monster
router.get('/monsters/:id', data.showMonsterById);
 
// Create New Monster
router.post('/monsters', data.createMonster);
 
// Update Monster
router.put('/monsters/:id', data.updateMonster);
 
// Delete Monster
router.delete('/monsters/:id', data.deleteMonster);
 
// export default router
exports.router = router;

