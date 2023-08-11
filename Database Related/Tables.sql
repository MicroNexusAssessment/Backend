CREATE TABLE `score` (
  `score_id` int NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `player_name` varchar(45) DEFAULT NULL,
  `player_score` int DEFAULT NULL,
  PRIMARY KEY (`score_id`,`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
