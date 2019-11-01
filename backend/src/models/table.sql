--create extension if not exists pgcrypto;

create table login (
    loginid uuid primary key default gen_random_uuid(),
    email varchar(60),
    password varchar(60)
);

create table owner (
    ownerid uuid primary key default gen_random_uuid(), 
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
    skillid serial primary key,
    createdate timestamp default now(),
    skills varchar(70)
);

create table language (
    languageid serial primary key,
    createdate timestamp default now(),
    language varchar(70)
);

create table result (
    resultid serial primary key,
    createdate timestamp default now(),
    result varchar(70)
);

create table album (
    albumid serial primary key,
    modifydate timestamp,
    createdate timestamp default now(),
    album text [],
    detail varchar(100)
);
