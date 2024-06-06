create database weeho_db;
use weeho_db;
FLUSH PRIVILEGES;
SET SQL_SAFE_UPDATES = 1;

create table users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) not null,
    phone varchar(20) not null,
    email varchar(255) unique not null,
    password varbinary varchar(255) not null
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    occasion VARCHAR(255) NOT NULL,
    PERFORMER_NAME VARCHAR(255)
);

CREATE TABLE contact_us (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

select * from users;
SELECT * FROM events;
SELECT * FROM contact_us;

CREATE TABLE PERFORMER_USERS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    PERFORMER_NAME VARCHAR(255) NOT NULL,
    PERFORMER_PHONE VARCHAR(20) NOT NULL,
    PERFORMER_EMAIL VARCHAR(255) NOT NULL UNIQUE,
    PERFORMANCE VARCHAR(20) NOT NULL,
    PASSWORD VARBINARY(255) NOT NULL
);

select * from performer_users;