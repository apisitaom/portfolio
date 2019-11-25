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

