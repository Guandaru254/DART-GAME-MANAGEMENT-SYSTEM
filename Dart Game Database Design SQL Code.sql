CREATE TABLE `PLAYERS` (
	`Player_ID` varchar NOT NULL AUTO_INCREMENT,
	`Phone_Number` INT NOT NULL,
	`Age` INT NOT NULL,
	`Gender` TEXT NOT NULL,
	`Date_Registered` DATE NOT NULL,
	`Last_Played` INT NOT NULL,
	`IsActive` BOOLEAN NOT NULL,
	`Games_Played` INT NOT NULL,
	`Games_Won` INT NOT NULL,
	`Games_Lost` INT NOT NULL,
	`Preferred_Hand` TEXT NOT NULL,
	PRIMARY KEY (`Player_ID`)
);

CREATE TABLE `BOARD` (
	`Board_ID` varchar NOT NULL AUTO_INCREMENT,
	`Player_ID` varchar NOT NULL,
	`Game_ID` varchar NOT NULL,
	`Board_Name` varchar NOT NULL,
	`Board_Model` varchar NOT NULL,
	`Board_Location` varchar NOT NULL,
	`IsAvailable` BOOLEAN NOT NULL,
	PRIMARY KEY (`Board_ID`)
);

CREATE TABLE `DARTS` (
	`Dart_ID` varchar NOT NULL AUTO_INCREMENT,
	`Player_ID` varchar NOT NULL,
	`Game_ID` varchar NOT NULL,
	`Dart_Material` varchar NOT NULL,
	`Dart_Length` varchar NOT NULL,
	`Dart_Weight` varchar NOT NULL,
	`Dart_Level` varchar NOT NULL,
	PRIMARY KEY (`Dart_ID`)
);

CREATE TABLE `GAMES` (
	`Game_ID` varchar NOT NULL AUTO_INCREMENT,
	`Player_ID` varchar NOT NULL,
	`Game_Type` varchar NOT NULL,
	PRIMARY KEY (`Game_ID`)
);

CREATE TABLE `SCORES` (
	`Score_ID` varchar NOT NULL AUTO_INCREMENT,
	`Player_ID` varchar NOT NULL,
	`Game_ID` varchar NOT NULL,
	`Time_Recorded` TIMESTAMP NOT NULL,
	PRIMARY KEY (`Score_ID`)
);

CREATE TABLE `PAYMENTS` (
	`Payment_ID` varchar NOT NULL AUTO_INCREMENT,
	`Player_ID` varchar NOT NULL,
	`Game_ID` varchar NOT NULL,
	`Payment_Method` varchar NOT NULL,
	`Amount` INT NOT NULL,
	`Date_Of_Payment` DATE NOT NULL,
	`Time_Of_Payment` TIMESTAMP NOT NULL,
	`Status_Of_Payment` varchar NOT NULL,
	PRIMARY KEY (`Payment_ID`)
);

CREATE TABLE `STAFF` (
	`Staff_ID` varchar NOT NULL AUTO_INCREMENT,
	`Board_ID` varchar NOT NULL,
	`Game_ID` varchar NOT NULL,
	`Staff_Name` varchar NOT NULL,
	`Phone_Number` INT NOT NULL,
	`Gender` varchar NOT NULL,
	`Age` INT NOT NULL,
	`Hire_Date` DATE NOT NULL,
	PRIMARY KEY (`Staff_ID`)
);

CREATE TABLE `MANAGER` (
	`Manager_ID` varchar NOT NULL AUTO_INCREMENT,
	`Manager_Name` varchar NOT NULL,
	`Phone_Number` INT NOT NULL,
	`Age` INT NOT NULL,
	`Gender` varchar NOT NULL,
	`Hire_Date` DATE NOT NULL,
	PRIMARY KEY (`Manager_ID`)
);

ALTER TABLE `BOARD` ADD CONSTRAINT `BOARD_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `PLAYERS`(`Player_ID`);

ALTER TABLE `BOARD` ADD CONSTRAINT `BOARD_fk1` FOREIGN KEY (`Game_ID`) REFERENCES `GAMES`(`Game_ID`);

ALTER TABLE `DARTS` ADD CONSTRAINT `DARTS_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `PLAYERS`(`Player_ID`);

ALTER TABLE `DARTS` ADD CONSTRAINT `DARTS_fk1` FOREIGN KEY (`Game_ID`) REFERENCES `GAMES`(`Game_ID`);

ALTER TABLE `GAMES` ADD CONSTRAINT `GAMES_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `PLAYERS`(`Player_ID`);

ALTER TABLE `SCORES` ADD CONSTRAINT `SCORES_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `PLAYERS`(`Player_ID`);

ALTER TABLE `SCORES` ADD CONSTRAINT `SCORES_fk1` FOREIGN KEY (`Game_ID`) REFERENCES `GAMES`(`Game_ID`);

ALTER TABLE `PAYMENTS` ADD CONSTRAINT `PAYMENTS_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `PLAYERS`(`Player_ID`);

ALTER TABLE `PAYMENTS` ADD CONSTRAINT `PAYMENTS_fk1` FOREIGN KEY (`Game_ID`) REFERENCES `GAMES`(`Game_ID`);

ALTER TABLE `STAFF` ADD CONSTRAINT `STAFF_fk0` FOREIGN KEY (`Board_ID`) REFERENCES `BOARD`(`Board_ID`);

ALTER TABLE `STAFF` ADD CONSTRAINT `STAFF_fk1` FOREIGN KEY (`Game_ID`) REFERENCES `GAMES`(`Game_ID`);









