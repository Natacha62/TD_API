# API node.js

Ce projet est une API développée avec **Express** et **TypeScript**. 
Elle permet de gérer une liste d'utilisateurs avec des routes `GET` et `POST`. 
Les données sont stockées **en mémoire** (pas de base de données).

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/Natacha62/TD_API.git
cd api-node-ts
```

Initialisation du projet Node.js :

```bash
npm init -y
```

Intallation des dépendances :

```bash
npm install express dotenv
npm install -D typescript ts-node @types/node @types/express nodemon
```

Initialisation de TypeScript :

```bash
npx tsc --init
```
## Utilisation

Lancer le serveur :

```bash
npm run dev
```

Le serveur démarre sur : http://localhost:4000

## Test et démonstration

### Postman

L'image montre le résultat de la requête GET dans Postman quand il n'y a pas de donnée dans l'API.
![Alt text](./image/Postman-GET.png)

L'image montre le résultat de la requête POST dans Postman quand on ajoute des données dans l'API.
![Alt.text](./image/Postman_POST.png)

L'image montre le résultat de la requête GET dans Postman après avoir insérer des données avec POST dans l'API.
![Alt.text](./image/Postman_GET_apres_POST.png)