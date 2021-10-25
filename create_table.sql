CREATE TABLE `portfolio`.`education` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
    `year` INT UNSIGNED NOT NULL ,
    `tilte` VARCHAR(100) NOT NULL ,
    `content` TEXT NOT NULL ,
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB;

CREATE TABLE `portfolio`.`experience` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
    `year` VARCHAR(30) NOT NULL ,
    `tilte` VARCHAR(100) NOT NULL ,
    `content` TEXT(3000) NOT NULL ,
    PRIMARY KEY (`id`)
)

CREATE TABLE messages (
    id INT AUTO_INCREMENT,
    name varchar(50) not null,
    email varchar(150) not null,
    subject varchar(300) not null,
    message text(5000) not null,
    PRIMARY KEY (id)
)