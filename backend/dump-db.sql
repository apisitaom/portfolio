--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: aboutme; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.aboutme (
    aboutid integer NOT NULL,
    aboutme character varying(400),
    hobby character varying(300),
    interest character varying(300),
    family character varying(250),
    address character varying(250)
);


ALTER TABLE public.aboutme OWNER TO aom;

--
-- Name: about_aboutid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.about_aboutid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.about_aboutid_seq OWNER TO aom;

--
-- Name: about_aboutid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.about_aboutid_seq OWNED BY public.aboutme.aboutid;


--
-- Name: album; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.album (
    createdate timestamp without time zone DEFAULT now(),
    albumid integer NOT NULL,
    modifydate timestamp without time zone,
    detail character varying(300),
    url character varying(350),
    name character varying(120),
    album character varying(150),
    content character varying(120)
);


ALTER TABLE public.album OWNER TO aom;

--
-- Name: album_albumid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.album_albumid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.album_albumid_seq OWNER TO aom;

--
-- Name: album_albumid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.album_albumid_seq OWNED BY public.album.albumid;


--
-- Name: comment; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.comment (
    commentid integer NOT NULL,
    comment character varying(250),
    createdate timestamp without time zone DEFAULT now()
);


ALTER TABLE public.comment OWNER TO aom;

--
-- Name: comment_commentid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.comment_commentid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_commentid_seq OWNER TO aom;

--
-- Name: comment_commentid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.comment_commentid_seq OWNED BY public.comment.commentid;


--
-- Name: language; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.language (
    createdate timestamp without time zone DEFAULT now(),
    languageid integer NOT NULL,
    title character varying(30),
    language character varying(250)
);


ALTER TABLE public.language OWNER TO aom;

--
-- Name: language_languageid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.language_languageid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.language_languageid_seq OWNER TO aom;

--
-- Name: language_languageid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.language_languageid_seq OWNED BY public.language.languageid;


--
-- Name: login; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.login (
    email character varying(60),
    password character varying(60),
    loginid uuid DEFAULT public.gen_random_uuid() NOT NULL
);


ALTER TABLE public.login OWNER TO aom;

--
-- Name: owner; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.owner (
    createdate timestamp without time zone DEFAULT now(),
    modifydate timestamp without time zone,
    picture character varying(100),
    name character varying(50),
    phonnumber character varying(15),
    address character varying(100),
    subdistrict character varying(50),
    district character varying(50),
    provicne character varying(50),
    zipcode character varying(20),
    facebook character varying(100),
    github character varying(50),
    gitlab character varying(50),
    okta character varying(50),
    age character varying(10),
    gender character varying(30),
    birthday timestamp without time zone,
    education character varying(400),
    ownerid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    other character varying(500),
    interest character varying(500),
    text character varying(100),
    email character varying(80),
    ig character varying(50)
);


ALTER TABLE public.owner OWNER TO aom;

--
-- Name: result; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.result (
    createdate timestamp without time zone DEFAULT now(),
    resultid integer NOT NULL,
    result character varying(70),
    title character varying(30)
);


ALTER TABLE public.result OWNER TO aom;

--
-- Name: result_resultid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.result_resultid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.result_resultid_seq OWNER TO aom;

--
-- Name: result_resultid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.result_resultid_seq OWNED BY public.result.resultid;


--
-- Name: resume; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.resume (
    resumeid integer NOT NULL,
    experience character varying(300),
    education character varying(250),
    activity character varying(300),
    professional character varying(800)
);


ALTER TABLE public.resume OWNER TO aom;

--
-- Name: resume_resumeid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.resume_resumeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.resume_resumeid_seq OWNER TO aom;

--
-- Name: resume_resumeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.resume_resumeid_seq OWNED BY public.resume.resumeid;


--
-- Name: skill; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.skill (
    createdate timestamp without time zone DEFAULT now(),
    skillid integer NOT NULL,
    title character varying(30),
    skill character varying(500)
);


ALTER TABLE public.skill OWNER TO aom;

--
-- Name: skill_skillid_seq; Type: SEQUENCE; Schema: public; Owner: aom
--

CREATE SEQUENCE public.skill_skillid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_skillid_seq OWNER TO aom;

--
-- Name: skill_skillid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aom
--

ALTER SEQUENCE public.skill_skillid_seq OWNED BY public.skill.skillid;


--
-- Name: aboutme aboutid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.aboutme ALTER COLUMN aboutid SET DEFAULT nextval('public.about_aboutid_seq'::regclass);


--
-- Name: album albumid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.album ALTER COLUMN albumid SET DEFAULT nextval('public.album_albumid_seq'::regclass);


--
-- Name: comment commentid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.comment ALTER COLUMN commentid SET DEFAULT nextval('public.comment_commentid_seq'::regclass);


--
-- Name: language languageid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.language ALTER COLUMN languageid SET DEFAULT nextval('public.language_languageid_seq'::regclass);


--
-- Name: result resultid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.result ALTER COLUMN resultid SET DEFAULT nextval('public.result_resultid_seq'::regclass);


--
-- Name: resume resumeid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.resume ALTER COLUMN resumeid SET DEFAULT nextval('public.resume_resumeid_seq'::regclass);


--
-- Name: skill skillid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.skill ALTER COLUMN skillid SET DEFAULT nextval('public.skill_skillid_seq'::regclass);


--
-- Data for Name: aboutme; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.aboutme (aboutid, aboutme, hobby, interest, family, address) FROM stdin;
2	FOR ME : relationship it very inportant for me, Knowledge it important too! ,knowledge I mean experience between work or use life . Thank You So Much	When I have free time I like search on internet, YouTube, listenning Music but I also like sports such as running, football, swimming anything else like sports, and I like movies .	I very interst property and stock in thailand and I interest books category "how to", "Rule of Success", "Leader" , interest forest 	for my family has five members have my mom, my dad, my brother, my grandmother and me, have family so very good one thing that I want is we  make activity along forever .	Srikoon 46/7 subdistrict jhanlan, district phana, provicne amnat charoen, zipcode 37180
\.


--
-- Data for Name: album; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.album (createdate, albumid, modifydate, detail, url, name, album, content) FROM stdin;
\.


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.comment (commentid, comment, createdate) FROM stdin;
\.


--
-- Data for Name: language; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.language (createdate, languageid, title, language) FROM stdin;
2019-11-19 22:19:36.811061	3	\N	Thai language / English language, I vary like to improve ENG for ENG I can speak but I don't know a lot of vocabulary but now I still improve both! 
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.login (email, password, loginid) FROM stdin;
apisitprompha@gmail.com	0933347977Aom	b5d6be98-7999-4037-b5d6-8a16f709b7fc
\.


--
-- Data for Name: owner; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.owner (createdate, modifydate, picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, ownerid, other, interest, text, email, ig) FROM stdin;
2019-11-19 22:14:11.266288	2019-11-24 14:14:12	picture-1574582524438.jpg	APISIT PROMPHA	0933347977	Srikoon 46/7 subdistrict jhanlan, district phana, provicne amnat charoen, zipcode 37180	jhanlan	phana 	phana charoen	37180	Aom Apisit	apisitaom	aom	-	22	male	2540-03-07 17:00:00	Computer Enginerring, Suranaree University of Technology	bf216378-66d5-4c97-aaf6-e60982ffc014	Hello, My name is apisit Prompha but you can call me "Aom" I enjoy to improve and interest to build web application/mobile application I'm also interest Stock of Thailand, property and Cryptocurrency	I very interst property and stock in thailand and I interest books category "how to", "Rule of Success", "Leader" , interest forest 	Computer Engineering / frontend and backend developer\n	apisitprompha@gmail.com	apisitaom21
\.


--
-- Data for Name: result; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.result (createdate, resultid, result, title) FROM stdin;
\.


--
-- Data for Name: resume; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.resume (resumeid, experience, education, activity, professional) FROM stdin;
3	I'm just Graduate from Suranaree University of technology, but I get intership four month and I so happy with culture programmer  	raduate from Suranaree University of technology, Major : Computer Engineering	when I study in University I join to RTC(Roving Teacher Club), RTC will do collegian to teacher it's real teach in school but not only teach but also maintain and build some thing in school  request from teacher. and anything else	 I intend for my project like code, program  and I have positive thinking for culture with programmer, I like to improve muy self and I can learn by my self ,I do backend and frontend developer, use to computer language has java, python, css, type script, java script, html | backend developer I like framework express and spring-boot | frontend developer I like react and angular for database I like postgreSQL and mongoDB, docker and kubernetes very important I very enjoy to improve my self and CODE that me love
\.


--
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: aom
--

COPY public.skill (createdate, skillid, title, skill) FROM stdin;
2019-11-19 22:28:47.031884	3	\N	Tools :- backend: express, spring-boot | frontend: react, react-native, spring-boot | database: postgreSQL, mongoDB | docker, kubernetes 
\.


--
-- Name: about_aboutid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.about_aboutid_seq', 2, true);


--
-- Name: album_albumid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.album_albumid_seq', 30, true);


--
-- Name: comment_commentid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.comment_commentid_seq', 6, true);


--
-- Name: language_languageid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.language_languageid_seq', 3, true);


--
-- Name: result_resultid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.result_resultid_seq', 2, true);


--
-- Name: resume_resumeid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.resume_resumeid_seq', 3, true);


--
-- Name: skill_skillid_seq; Type: SEQUENCE SET; Schema: public; Owner: aom
--

SELECT pg_catalog.setval('public.skill_skillid_seq', 3, true);


--
-- Name: aboutme about_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.aboutme
    ADD CONSTRAINT about_pkey PRIMARY KEY (aboutid);


--
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (albumid);


--
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (commentid);


--
-- Name: language language_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.language
    ADD CONSTRAINT language_pkey PRIMARY KEY (languageid);


--
-- Name: login login_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (loginid);


--
-- Name: owner owner_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.owner
    ADD CONSTRAINT owner_pkey PRIMARY KEY (ownerid);


--
-- Name: result result_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_pkey PRIMARY KEY (resultid);


--
-- Name: resume resume_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.resume
    ADD CONSTRAINT resume_pkey PRIMARY KEY (resumeid);


--
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (skillid);


--
-- PostgreSQL database dump complete
--

