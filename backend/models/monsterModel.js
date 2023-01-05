// import connection
import db from "../config/database.js";
 
// Get All Monsters
export const getMonsters = (result) => {
    db.query("SELECT * FROM TMonsters", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Monster
export const getMonsterById = (id, result) => {
    db.query("SELECT * FROM TMonsters WHERE intMonsterID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Monster to Database
export const insertMonster = (data, result) => {
    db.query("INSERT INTO TMonsters SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Monster to Database
export const updateMonsterById = (data, id, result) => {
    db.query("UPDATE TMonsters SET strName, intHealthPoints, intArmorClass, intInitiative, strSpecialAbilities, intStr, intDex, intCon, intInt, intWis, intCha WHERE intMonsterID = ?", [data.strName, data.intHealthPoints, data.intArmorClass, data.intInitiative, data.strSpecialAbilities, intStr, intDex, intCon, intInt, intWis, intCha, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Monster to Database
export const deleteMonsterById = (id, result) => {
    db.query("DELETE FROM TMonsters WHERE intMonsterID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

