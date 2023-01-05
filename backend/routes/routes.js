// import express
import express from "express";
 
// import function from controller
import { showMonsters, showMonsterById, createMonster, updateMonster, deleteMonster } from "../controllers/monster.js";
 
// init express router
const router = express.Router();
 
// Get All Monster
router.get('/monsters', showMonsters);
 
// Get Single Monster
router.get('/monsters/:id', showMonsterById);
 
// Create New Monster
router.post('/monsters', createMonster);
 
// Update Monster
router.put('/monsters/:id', updateMonster);
 
// Delete Monster
router.delete('/monsters/:id', deleteMonster);
 
// export default router
export default router;
