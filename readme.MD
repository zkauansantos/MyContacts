# API CRUD CONTATOS

API desenvolvida com express, como um CRUD de contatos que consiste em cadastrar novos contatos com seu nome, email, phone, e de onde veio esse contato, como um networking.

## Tecnologias Utilizadas

- Javascript
- NodeJS
- Docker
- Postgres
- Yarn
- Insomnia

## Como rodar o projeto

Abra o terminal e execute os seguintes comandos:

```
$ git clone https://github.com/zkauansantos/MyContactsAPI.git
```
```
$ cd MYCONTACTS
```
```
$ yarn install or npm install
```
```
$ yarn install or npm install
```
```
$ docker pull postgres
```
```
$ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```
```
$ docker start pg
```
```
$ docker exec -it pg bash
```
```
$ psql -U root
```
```
$ CREATE DATABASE mycontacts;
```
```
$ \c mycontacts
```
```
$ CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```
```
$ CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);
```
```
$ CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
````

Baixe e instale Insomnia no seu Computador

https://insomnia.rest/download

E lá dentro faça suas requisições

## Aprendizados e Desafios

- Desenvolver com node juntamente criando um CRUD com express
- Aprender a importância de separar controllers e repositories
- Primeira vez utilizando Banco de dados SQL
- Utilizar Docker pra criar os containers
- Importancia de tratar erros e SQL injection

### CREDITOS

Mateus Silva - https://www.instagram.com/imateus.silva/
