DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteScoreIdBased`(
in player_id_in int
)
BEGIN
delete from target.score where player_id=player_id_in;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getScoreIdBased`(in p_id_in int)
BEGIN
select * from target.score where player_id=p_id_in;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertScore`(
in p_id_in int,
in p_name_in varchar(30),
in p_score_in int
)
BEGIN

insert into target.score (player_id,player_name,player_score) values (p_id_in,p_name_in,p_score_in);
select * from target.score where player_id=p_id_in;
END$$
DELIMITER ;
