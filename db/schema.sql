/* Create and use the burgers_db db */
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
	`id` Int( 20 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL DEFAULT FALSE,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);