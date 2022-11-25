*****|------------------------ Docker ------------------------|*****

**Étape 1 :** Installer <a href="https://www.docker.com">Docker</a> sur Windows.

**Étape 2 :** Installer <a href="https://www.microsoft.com/store/productId/9P9TQF7MRM4R">Wsl 2</a> par  Microsoft Store.

**Étape 3 :** Installer <a href="https://www.microsoft.com/store/productId/9PDXGNCFSCZV">Ubuntu</a> par  Microsoft Store.


**<-- Les étapes pour back-end -->**

**Étape 4-1 :** Créer un Dockerfile.

        FROM node:16
        WORKDIR /app
        COPY package.json .
        RUN npm install
        COPY . ./
        EXPOSE 9001
        CMD ["npm", "start"]
    
**Étape 4-2 :** Créer un network, et lui donner le nom de livraison-marhaba-back-end-net.

    docker network create livraison-marhaba-back-end-net

**Étape 4-3 :** Executez un container basé sur l'image mongo, nommez-le livraison-marhaba-back-end-db et faites-le utiliser avec le network livraison-marhaba-back-end-net.

    docker container run -d --name livraison-marhaba-back-end-db -v livraison-marhaba-back-end-db:/data/db --network livraison-marhaba-back-end-net mongo

**Étape 4-4 :** Entrer dans le dossier du serveur où se trouver Dockerfile et creer cette image et nommez-la livraison-marhaba-back-end-docker:test et faire un build.

    docker build -t livraison-marhaba-back-end-docker:test .

**Étape 4-5 :** Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhaba-back-end et faites-le utiliser avec le network livraison-marhaba-back-end-net.

    docker container run -d --name livraison-marhaba-back-end -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-back-end-net -p 9000:9000 livraison-marhaba-back-end-docker:test
    

**<-- Les étapes pour front-end -->**

**Étape 5-1 :** Créer un Dockerfile.

        FROM node:16
        WORKDIR /views
        COPY package.json .
        RUN npm install
        COPY . ./
        EXPOSE 3000
        CMD ["npm", "start"]

**Étape 5-2 :** Créer un network, et lui donner le nom de livraison-marhaba-front-end-net.

    docker network create livraison-marhaba-front-end-net

**Étape 5-1 :** Entrer dans le dossier du serveur où se trouver Dockerfile et creer cette image et nommez-la livraison-marhaba-front-end-docker:test et faire un build.

    docker build -t livraison-marhaba-front-end-docker:test .

**Étape 5-2 :** Exécutez un container basé sur cette image que vous venez de créer, nommez-le livraison-marhabafront-end- et faites-le utiliser avec le network livraison-marhabafront-end--net.
    
    docker container run -d --name livraison-marhaba-front-end- -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-front-end-net -p 3000:3000 livraison-marhaba-front-end-docker:test


*****|------------------------ Testing ------------------------|*****

**Étape 1 :** Installer la bibliothèque jest et supertest

    npm i --save-dev jest supertest

**Étape 2 :** Créer un tests.test.js
    
1-  Exiger supertest et index.js

        const request = require('supertest');
        const app = require('./index');

2-  Créer la fonction describe(name, fn)

    describe("POST /api/auth/login"), () => {})

3- A l'iterier de la fonction describe, crée trois test.
    
**Étape 3 :** Enfin, exécutez le test.

    npm test
    
