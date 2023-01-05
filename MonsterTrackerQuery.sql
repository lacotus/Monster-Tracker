-- =============
-- == Options ==
-- =============
use MonsterTrackerDB;
SET NOCOUNT ON;

-- ===========
-- == Drops ==
-- ===========
IF OBJECT_ID ('TMonsterWeapons')	IS NOT NULL DROP TABLE TMonsterWeapons
IF OBJECT_ID ('TMonsters')			IS NOT NULL DROP TABLE TMonsters
IF OBJECT_ID ('TWeapons')			IS NOT NULL DROP TABLE TWeapons
IF OBJECT_ID ('TWeaponTypes')		IS NOT NULL DROP TABLE TWeaponTypes

-- =============
-- == Creates ==
-- =============
CREATE TABLE TMonsters (
	 intMonsterID			INTEGER			NOT NULL
	,strName				VARCHAR(255)	NOT NULL
	,intHealthPoints		INTEGER			NOT NULL
	,intArmorClass			INTEGER			NOT NULL
	,intInitiative			INTEGER			NOT NULL
	,strSpecialAbilities	VARCHAR(255)	NOT NULL
	,intStr					INTEGER			NOT NULL
	,intDex					INTEGER			NOT NULL
	,intCon					INTEGER			NOT NULL
	,intInt					INTEGER			NOT NULL
	,intWis					INTEGER			NOT NULL
	,intCha					INTEGER			NOT NULL
	,CONSTRAINT TMonsters_PK PRIMARY KEY ( intMonsterID )
)

CREATE TABLE TWeapons (
	 intWeaponID			INTEGER			NOT NULL
	,strName				VARCHAR(255)	NOT NULL
	,strDamage				VARCHAR(255)	NOT NULL
	,strRange				VARCHAR(255)	NOT NULL
	,intWeaponTypeID		INTEGER			NOT NULL
	,CONSTRAINT TWeapons_PK PRIMARY KEY ( intWeaponID )
)

CREATE TABLE TMonsterWeapons (
	 intMonsterWeaponID		INTEGER			NOT NULL
	,intMonsterID			INTEGER			NOT NULL
	,intWeaponID			INTEGER			NOT NULL
	,CONSTRAINT TMonsterWeapons_PK PRIMARY KEY ( intMonsterWeaponID )
)

CREATE TABLE TWeaponTypes (
	 intWeaponTypeID		INTEGER			NOT NULL
	,strWeaponType			VARCHAR(255)	NOT NULL
	,CONSTRAINT TWeaponTypes_PK PRIMARY KEY ( intWeaponTypeID )
)

-- =====================================
-- == Establish Referential Integrity ==
-- =====================================
--
-- #	Child				Parent				Column
-- -	-----				------				------
-- 1	TMonsterWeapons		TMonsters			intMonsterID
-- 2	TMonsterWeapons		TWeapons			intWeaponID
-- 3	TWeapons			TWeaponTypes		intWeaponTypeID

-- 1
ALTER TABLE TMonsterWeapons ADD CONSTRAINT TMonsterWeapons_TMonsters_FK
FOREIGN KEY ( intMonsterID ) REFERENCES TMonsters ( intMonsterID )

-- 2
ALTER TABLE TMonsterWeapons ADD CONSTRAINT TMonsterWeapons_TWeapons_FK
FOREIGN KEY ( intWeaponID ) REFERENCES TWeapons ( intWeaponID )

-- 3
ALTER TABLE TWeapons ADD CONSTRAINT TWeapons_TWeaponTypes_FK
FOREIGN KEY ( intWeaponTypeID ) REFERENCES TWeaponTypes ( intWeaponTypeID )

-- ===================
-- == Add Test Data ==
-- ===================
INSERT INTO TWeaponTypes	 ( intWeaponTypeID, strWeaponType )
VALUES						 ( 1, 'Simple Melee' )
							,( 2, 'Simple Ranged' )
							,( 3, 'Martial Melee' )
							,( 4, 'Martial Ranged' )

INSERT INTO TWeapons		 ( intWeaponID, strName, strDamage, strRange, intWeaponTypeID )
VALUES						 ( 1, 'Longsword', '1d8+*/S', '5', 3 )
							,( 2, 'Shortsword', '1d6+*/S', '5', 3 )
							,( 3, 'Longbow', '1d8+*/P', '150/600', 4 )
							,( 4, 'Shortbow', '1d6+*/P', '80/320', 2 )
							,( 5, 'Club', '1d4+*/B', '5', 1 )
