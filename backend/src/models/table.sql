create table owner (
    ownerid integer primary key, 
    createdate timestamp default now(),
    modifydate timestamp,
    picture varchar(100),
    name varchar(50),
    age varchar(10),
    education varchar(350),
);

create table skill (
    skillid integer primary key,
    createdate timestamp default now(),
    skills json,
);

create table language (
    languageid integer primary key,
        createdate timestamp default now(),
    language json,
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