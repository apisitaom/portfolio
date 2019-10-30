--create extension if not exists pgcrypto;

create table login (
    email varchar(60),
    password varchar(60)
);

create table owner (
    ownerid uuid primary key, 
    createdate timestamp default now(),
    modifydate timestamp,
    picture varchar(100),
    name varchar(50),
    phonnumber varchar(15),
    address varchar(100),
    subdistrict varchar(50),
    district varchar(50),
    provicne varchar(50),
    zipcode varchar(20),
    facebook varchar(100),
    github varchar(50),
    gitlab varchar(50),
    okta varchar(50),
    age varchar(10),
    gender varchar(30),
    birthday timestamp,
    education varchar(400),
    other varchar(120)
)

create table skill (
    skillid integer primary key,
    createdate timestamp default now(),
    skills json
);

create table language (
    languageid integer primary key,
    createdate timestamp default now(),
    language json
);

create table result (
    resultid integer primary key,
    createdate timestamp default now(),
    result json
);

create table album (
    albumid integer primary key,
    createdate timestamp default now(),
    album text []
);