-- MySQL Script generated by MySQL Workbench

-- Thu Jun 30 09:19:24 2022

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

SET UNIQUE_CHECKS=0;

SET FOREIGN_KEY_CHECKS = 0;

SET
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------

-- Schema mydb

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema mydb

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `bitch_me_please` DEFAULT CHARACTER SET utf8;

USE `bitch_me_please` ;

DROP TABLE IF EXISTS `bitch_me_please`.`users` ;

DROP TABLE IF EXISTS `bitch_me_please`.`topics` ;

DROP TABLE IF EXISTS `bitch_me_please`.`TopicsDetails` ;

-- -----------------------------------------------------

-- Table `mydb`.`users`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `bitch_me_please`.`users` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(255) NOT NULL,
        `hashedPassword` VARCHAR(255) NOT NULL,
        `pseudo` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`topics`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `bitch_me_please`.`topics` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(155) NOT NULL,
        `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        `reaction` INT NOT NULL,
        `img` LONGTEXT NOT NULL,
        `user_id` INT NOT NULL,
        PRIMARY KEY (`id`, `user_id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
        INDEX `fk_topics_user_idx` (`user_id` ASC) VISIBLE,
        CONSTRAINT `fk_topics_user` FOREIGN KEY (`user_id`) REFERENCES `mydb`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`TopicsDetails`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `bitch_me_please`.`TopicsDetails` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
        `text` LONGTEXT NOT NULL,
        `plus` INT NOT NULL,
        `minus` INT NOT NULL,
        `user_id` INT NOT NULL,
        `topics_id` INT NOT NULL,
        PRIMARY KEY (`id`, `user_id`, `topics_id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
        INDEX `fk_TopicsDetails_topics1_idx` (`topics_id` ASC) VISIBLE,
        INDEX `fk_TopicsDetails_user1_idx` (`user_id` ASC) VISIBLE,
        CONSTRAINT `fk_TopicsDetails_topics1` FOREIGN KEY (`topics_id`) REFERENCES `mydb`.`topics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_TopicsDetails_user1` FOREIGN KEY (`user_id`) REFERENCES `mydb`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;