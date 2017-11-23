CREATE DATABASE AchaMusico;
USE AchaMusico
GO
CREATE TABLE bd (
	ID INT IDENTITY (1,1),
    Nome VARCHAR(30),
    Idade INT,
    Estado VARCHAR(30),
	Cidade VARCHAR(30),
	Tel VARCHAR(30),
	EstiloMusical VARCHAR(30),
	TipoDeInstrumento VARCHAR(30),
	Objetivo VARCHAR(30),
	Influencias VARCHAR(30),
	OutrasHabilidades VARCHAR(30)
);