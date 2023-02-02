-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: mttest
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `mttest`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mttest` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `mttest`;

--
-- Table structure for table `battles`
--

DROP TABLE IF EXISTS `battles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `battles` (
  `intBattleID` int NOT NULL,
  `strName` varchar(255) NOT NULL,
  PRIMARY KEY (`intBattleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `battles`
--

LOCK TABLES `battles` WRITE;
/*!40000 ALTER TABLE `battles` DISABLE KEYS */;
INSERT INTO `battles` VALUES (1,'Battle 1 - Zombie'),(2,'Battle 2 - Brown Bear');
/*!40000 ALTER TABLE `battles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monsterbattles`
--

DROP TABLE IF EXISTS `monsterbattles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monsterbattles` (
  `intMonsterBattleID` int NOT NULL,
  `intMonsterID` int NOT NULL,
  `intBattleID` int NOT NULL,
  PRIMARY KEY (`intMonsterBattleID`),
  KEY `intMonsterID` (`intMonsterID`),
  KEY `intBattleID` (`intBattleID`),
  CONSTRAINT `monsterbattles_ibfk_1` FOREIGN KEY (`intMonsterID`) REFERENCES `monsters` (`intMonsterID`),
  CONSTRAINT `monsterbattles_ibfk_2` FOREIGN KEY (`intBattleID`) REFERENCES `battles` (`intBattleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monsterbattles`
--

LOCK TABLES `monsterbattles` WRITE;
/*!40000 ALTER TABLE `monsterbattles` DISABLE KEYS */;
INSERT INTO `monsterbattles` VALUES (1,1,1),(2,2,2);
/*!40000 ALTER TABLE `monsterbattles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monsters`
--

DROP TABLE IF EXISTS `monsters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monsters` (
  `intMonsterID` int NOT NULL,
  `strName` varchar(255) NOT NULL,
  `strHealthPoints` varchar(255) NOT NULL,
  `strArmorClass` varchar(255) NOT NULL,
  `strInitiative` varchar(255) NOT NULL,
  `strSpecialAbilities` varchar(255) NOT NULL,
  `strStrength` varchar(255) NOT NULL,
  `strDexterity` varchar(255) NOT NULL,
  `strConstitution` varchar(255) NOT NULL,
  `strIntelligence` varchar(255) NOT NULL,
  `strWisdom` varchar(255) NOT NULL,
  `strCharisma` varchar(255) NOT NULL,
  `strChallengeRating` varchar(255) NOT NULL,
  `strExperiencePoints` varchar(255) NOT NULL,
  `strSpeed` varchar(255) NOT NULL,
  PRIMARY KEY (`intMonsterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monsters`
--

LOCK TABLES `monsters` WRITE;
/*!40000 ALTER TABLE `monsters` DISABLE KEYS */;
INSERT INTO `monsters` VALUES (1,'Zombie','22 (3d8 + 9)','8','-2','Undead Fortitude | Saving throws: Wis +0 | Damage immunities: poison | Condition immunities: poisoned','13','6','16','3','6','5','1/4','50','20ft'),(2,'Brown Bear','34 (4d10+12)','11','0','Keen Smell: Advantage on perception checks relating to smell | Skills: Perception + 3 | Multiattack: The bear makes one bite and one claw attack per attack action','19','10','16','2','13','7','1','200','40');
/*!40000 ALTER TABLE `monsters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userbattles`
--

DROP TABLE IF EXISTS `userbattles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userbattles` (
  `intUserBattleID` int NOT NULL,
  `intUserID` int NOT NULL,
  `intBattleID` int NOT NULL,
  PRIMARY KEY (`intUserBattleID`),
  KEY `intUserID` (`intUserID`),
  KEY `intBattleID` (`intBattleID`),
  CONSTRAINT `userbattles_ibfk_1` FOREIGN KEY (`intUserID`) REFERENCES `users` (`intUserID`),
  CONSTRAINT `userbattles_ibfk_2` FOREIGN KEY (`intBattleID`) REFERENCES `battles` (`intBattleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userbattles`
--

LOCK TABLES `userbattles` WRITE;
/*!40000 ALTER TABLE `userbattles` DISABLE KEYS */;
INSERT INTO `userbattles` VALUES (1,2,1),(2,1,2);
/*!40000 ALTER TABLE `userbattles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `intUserID` int NOT NULL,
  `strUsername` varchar(255) NOT NULL,
  `strPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`intUserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'cotus','km051818'),(2,'cacmuffin','calvin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapons`
--

DROP TABLE IF EXISTS `weapons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weapons` (
  `intWeaponID` int NOT NULL,
  `strName` varchar(255) NOT NULL,
  `strAbilityScore` varchar(255) NOT NULL,
  `strDamage` varchar(255) NOT NULL,
  `intMonsterID` int NOT NULL,
  PRIMARY KEY (`intWeaponID`),
  KEY `intMonsterID` (`intMonsterID`),
  CONSTRAINT `weapons_ibfk_1` FOREIGN KEY (`intMonsterID`) REFERENCES `monsters` (`intMonsterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapons`
--

LOCK TABLES `weapons` WRITE;
/*!40000 ALTER TABLE `weapons` DISABLE KEYS */;
INSERT INTO `weapons` VALUES (1,'Slam','3','1d6+1',1),(2,'Bite','5','1d8+4',2),(3,'Claws','5','2d6+4',2);
/*!40000 ALTER TABLE `weapons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-01 22:15:44
