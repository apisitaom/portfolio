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
-- Name: album; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.album (
    createdate timestamp without time zone DEFAULT now(),
    album text[],
    albumid integer NOT NULL,
    modifydate timestamp without time zone,
    detail character varying(100)
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
-- Name: language; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.language (
    createdate timestamp without time zone DEFAULT now(),
    languageid integer NOT NULL,
    language character varying(70),
    title character varying(30)
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
    other character varying(120),
    ownerid uuid DEFAULT public.gen_random_uuid() NOT NULL
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
-- Name: skill; Type: TABLE; Schema: public; Owner: aom
--

CREATE TABLE public.skill (
    createdate timestamp without time zone DEFAULT now(),
    skillid integer NOT NULL,
    skill character varying(70),
    title character varying(30)
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
-- Name: album albumid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.album ALTER COLUMN albumid SET DEFAULT nextval('public.album_albumid_seq'::regclass);


--
-- Name: language languageid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.language ALTER COLUMN languageid SET DEFAULT nextval('public.language_languageid_seq'::regclass);


--
-- Name: result resultid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.result ALTER COLUMN resultid SET DEFAULT nextval('public.result_resultid_seq'::regclass);


--
-- Name: skill skillid; Type: DEFAULT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.skill ALTER COLUMN skillid SET DEFAULT nextval('public.skill_skillid_seq'::regclass);


--
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (albumid);


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
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: aom
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (skillid);


--
-- PostgreSQL database dump complete
--

