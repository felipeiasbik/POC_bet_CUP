--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    home text,
    away text,
    home_goals integer DEFAULT 0,
    away_goals integer DEFAULT 0
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (2, 'Argentina', 'Itália', 0, 0);
INSERT INTO public.games VALUES (3, 'França', 'Espanha', 0, 0);
INSERT INTO public.games VALUES (4, 'Inglaterra', 'Portugal', 0, 0);
INSERT INTO public.games VALUES (5, 'Bélgica', 'Holanda', 0, 0);
INSERT INTO public.games VALUES (6, 'Croácia', 'Suécia', 0, 0);
INSERT INTO public.games VALUES (7, 'Uruguai', 'Dinamarca', 0, 0);
INSERT INTO public.games VALUES (8, 'Rússia', 'México', 0, 0);
INSERT INTO public.games VALUES (9, 'Colômbia', 'Japão', 0, 0);
INSERT INTO public.games VALUES (10, 'Austrália', 'Coreia do Sul', 0, 0);
INSERT INTO public.games VALUES (12, 'Japão', 'Turquia', 3, 1);
INSERT INTO public.games VALUES (15, 'Brasil', 'Bélgica', 6, 2);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 16, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

