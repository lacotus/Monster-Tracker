// import connection
const config = require('../config/database.js');
const connection = config.connection;
 
// Get All Monsters
const getMonsters = (result) => {
    connection.query("SELECT * FROM TMonsters", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Monster
const getMonsterById = (id, result) => {
    connection.query("SELECT * FROM TMonsters WHERE intMonsterID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Monster to Database
const insertMonster = (data, result) => {
    connection.query("INSERT INTO TMonsters SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Monster to Database
const updateMonsterById = (data, id, result) => {
    connection.query("UPDATE TMonsters SET strName, intHealthPoints, intArmorClass, intInitiative, strSpecialAbilities, intStr, intDex, intCon, intInt, intWis, intCha WHERE intMonsterID = ?", [data.strName, data.intHealthPoints, data.intArmorClass, data.intInitiative, data.strSpecialAbilities, intStr, intDex, intCon, intInt, intWis, intCha, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Monster to Database
const deleteMonsterById = (id, result) => {
    connection.query("DELETE FROM TMonsters WHERE intMonsterID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Export code
exports.getMonsters = getMonsters;
exports.getMonsterById = getMonsterById;
exports.insertMonster = insertMonster;
exports.updateMonsterById = updateMonsterById;
exports.deleteMonsterById = deleteMonsterById;

