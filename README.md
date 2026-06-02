# Bibliotheque DevOps API

API REST de gestion des livres développée avec Node.js, Express et PostgreSQL.

## Fonctionnalités

- Ajouter un livre
- Consulter tous les livres
- Consulter un livre par ID
- Modifier un livre
- Supprimer un livre

## Technologies

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- GitHub Actions
- Jest

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

## Docker

```bash
docker compose up --build
```

## Tests

```bash
npm test
```

## Endpoints

GET /api/livres

GET /api/livres/:id

POST /api/livres

PUT /api/livres/:id

DELETE /api/livres/:id