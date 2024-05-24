create database weeho_db;
use weeho_db;

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
    occasion VARCHAR(255) NOT NULL
);

CREATE TABLE contact_us (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

flush privileges;

select * from users;
SELECT * FROM events;
SELECT * FROM contact_us;
