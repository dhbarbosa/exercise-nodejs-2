CREATE DATABASE IF NOT EXISTS escola;
USE escola;

CREATE TABLE IF NOT EXISTS turma(
    id_turma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50),
    createdAt DATETIME,
    updatedAt DATETIME
);

CREATE TABLE IF NOT EXISTS aluno(
    id_aluno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    matricula INTEGER,
    nome VARCHAR(100),
    fk_turma INT,
    createdAt DATETIME,
    updatedAt DATETIME,
    INDEX aluno_FKIndex1(fk_turma),
    FOREIGN KEY(fk_turma) REFERENCES turma(id_turma) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS professor(
    id_professor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
);

INSERT INTO turma VALUES (DEFAULT, "Informática", NOW(), NOW());
INSERT INTO turma VALUES (DEFAULT, "Recursos Humanos", NOW(), NOW());

INSERT INTO aluno VALUES (DEFAULT, 4453, 'Jose', 1, NOW(), NOW());
INSERT INTO aluno VALUES (DEFAULT, 4454, 'Matheus', 2, NOW(), NOW());
INSERT INTO aluno VALUES (DEFAULT, 4455, 'Guilherme', 1, NOW(), NOW());
INSERT INTO aluno VALUES (DEFAULT, 4456, 'Gael', 2, NOW(), NOW());

SELECT a.id_aluno AS id_aluno, a.matricula AS matricula, a.nome AS nome, t.descricao
FROM aluno AS a
INNER JOIN turma AS t ON a.fk_turma = t.id_turma;

CREATE VIEW selecAluno AS
SELECT a.id_aluno AS id_aluno, a.matricula AS matricula, a.nome AS nome, t.descricao
FROM aluno AS a
INNER JOIN turma AS t ON a.fk_turma = t.id_turma;
