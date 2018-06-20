CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
     id int NOT NULL AUTO_INCREMENT,
     burger_name CHAR(50) NOT NULL;
     devoured BOOLEAN NOT NULL DEFAULT 0;
     PRIMARY KEY (id)
);