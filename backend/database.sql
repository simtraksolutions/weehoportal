create database signup_db;
use signup_db;

create table new_user (
    name varchar(50) not null,
    phone varchar(20) not null,
    email varchar(50) unique not null,
    password varchar(50) not null
);

flush privileges;

select * from new_user;
