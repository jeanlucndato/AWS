# AWS - African Worlds Services

## Table des matières

1.  [Introduction](#introduction)
2.  [Fonctionnalités Clés](#fonctionnalités-clés)
3.  [Technologies Utilisées](#technologies-utilisées)
4.  [Structure du Projet](#structure-du-projet)
5.  [Internationalisation (i18n)](#internationalisation-i18n)
6.  [Installation et Lancement du Projet](#installation-et-lancement-du-projet)
    - [Prérequis](#prérequis)
    - [Variables d'Environnement](#variables-denvironnement)
    - [Scripts de Développement](#scripts-de-développement)
7.  [Déploiement](#déploiement)
8.  [Conventions de Code et Bonnes Pratiques](#conventions-de-code-et-bonnes-pratiques)
9.  [Contribution](#contribution)
10. [Licence](#licence)
11. [Contact](#contact)

---

## 1. Introduction

Bienvenue sur le dépôt de **African Worlds Services (AWS)**. Ce projet est une application web moderne et performante, construite avec Next.js, conçue pour servir de passerelle logistique entre la Belgique et la République Démocratique du Congo. Notre mission est de simplifier l'expédition et le suivi de vos colis et marchandises, en garantissant rapidité, sécurité et fiabilité pour toutes vos livraisons vers Goma et au-delà.

L'application offre une interface intuitive pour :

- Obtenir des devis personnalisés pour vos expéditions.
- Suivre en temps réel l'état de vos colis.
- Découvrir la gamme complète de nos services logistiques.
- Accéder aux informations tarifaires détaillées.
- Trouver des réponses aux questions fréquemment posées (FAQ).
- Nous contacter facilement.

## 2. Fonctionnalités Clés

- **Gestion des Expéditions**: Système intuitif pour initier et gérer vos envois.
- **Suivi de Colis en Temps Réel**: Permet aux utilisateurs de suivre le statut de leurs livraisons.
- **Devis Instantanés**: Formulaire pour obtenir rapidement des estimations de coûts.
- **Internationalisation**: Support multilingue (français, anglais, allemand) pour une audience élargie.
- **Design Réactif**: Expérience utilisateur optimisée sur tous les appareils (ordinateurs de bureau, tablettes, mobiles).
- **Optimisation SEO**: Grâce à Next.js, l'application est optimisée pour les moteurs de recherche.
- **Performances Élevées**: Chargement rapide des pages et excellente performance globale.

## 3. Technologies Utilisées

Ce projet s'appuie sur un stack technologique moderne et robuste pour garantir performance, maintenabilité et scalabilité :

- **Frontend Framework**:
  - **[Next.js](https://nextjs.org/)**: Le framework React pour des applications web hybrides et des performances de production optimales (rendu côté serveur - SSR, génération statique de sites - SSG, routage par système de fichiers).
  - **[React](https://react.dev/)**: La bibliothèque JavaScript pour la construction d'interfaces utilisateur interactives.
- **Styling**:
  - **[Tailwind CSS](https://tailwindcss.com/)**: Un framework CSS utilitaire hautement personnalisable qui permet de construire des designs complexes directement dans votre markup.
- **Animations**:
  - **[Framer Motion](https://www.framer.com/motion/)**: Une bibliothèque intuitive pour créer des animations fluides et performantes pour l'interface utilisateur.
- **Icônes**:
  - **[React Icons](https://react-icons.github.io/react-icons/)**: Une collection d'icônes populaires facilement intégrables dans les projets React (Font Awesome, Material Design, etc.).
- **Internationalisation (i18n)**:
  - _(À spécifier si une bibliothèque est utilisée, ex: `next-i18next` ou gestion manuelle via JSON)_: Pour la gestion des contenus multilingues.
- **Déploiement**:
  - **[Vercel](https://vercel.com/)**: Plateforme de déploiement cloud optimisée pour Next.js, offrant CI/CD et des fonctionnalités de déploiement instantané.

## 4. Structure du Projet

Le projet est organisé de manière logique pour faciliter la navigation et la collaboration :

your-nextjs-app/
├── .env.local # Variables d'environnement locales (NON versionnées)
├── public/ # Assets statiques accessibles publiquement
│ └── assets/
│ └── image/
│ └── propo5.jpg # Exemple: Image utilisée dans HeroSection
├── locales/ # Fichiers JSON pour la gestion des traductions par langue
│ ├── fr/ # Fichiers de traduction pour le français
│ │ ├── common.json # Textes communs (ex: navigation, pied de page, messages d'erreur)
│ │ ├── home.json # Textes spécifiques à la page d'accueil
│ │ ├── services.json # Textes spécifiques à la page des services
│ │ ├── tarifs.json # Textes spécifiques à la page des tarifs
│ │ ├── devis.json # Textes spécifiques à la page de devis
│ │ └── faq.json # Textes spécifiques à la FAQ
│ ├── en/ # Fichiers de traduction pour l'anglais
│ │ ├── common.json
│ │ ├── home.json
│ │ ├── services.json
│ │ ├── tarifs.json
│ │ ├── devis.json
│ │ └── faq.json
│ ├── de/ # NOUVEAU : Fichiers de traduction pour l'allemand
│ │ ├── common.json
│ │ ├── home.json
│ │ ├── services.json
│ │ ├── tarifs.json
│ │ ├── devis.json
│ │ └── faq.json
├── pages/ # Pages de l'application (basées sur le système de routage de Next.js)
│ ├── \_app.js # Point d'entrée de l'application, pour la configuration globale et les layouts partagés.
│ ├── \_document.js # Personnalisation des balises et (rarement nécessaire avec les versions récentes de Next.js).
│ ├── api/ # Dossier pour les API Routes (fonctions serverless)
│ │ └── hello.js # Exemple d'API Route
│ ├── index.jsx # Page d'accueil (/)
│ ├── services.jsx # Page des services (/services)
│ ├── tarifs.jsx # Page des tarifs (/tarifs)
│ ├── devis.jsx # Page pour obtenir un devis (/devis)
│ ├── faq.jsx # Page des questions fréquentes (/faq)
│ ├── suivi.jsx # Page de suivi des colis (/suivi)
│ └── contact.jsx # Page de contact (/contact)
├── components/ # Composants React réutilisables
│ ├── layout/ # Composants de mise en page (ex: en-tête, pied de page)
│ │ ├── Navbar.jsx # Barre de navigation principale
│ │ └── Footer.jsx # Pied de page
│ ├── common/ # Composants génériques et réutilisables (boutons, cartes, inputs)
│ │ └── Button.jsx
│ ├── sections/ # Composants spécifiques à des sections de page
│ │ └── HeroSection.jsx # Section héros de la page d'accueil
│ └── forms/ # Composants de formulaires
│ └── QuoteForm.jsx
├── styles/ # Fichiers de styles globaux et Tailwind CSS
│ ├── globals.css # Contient les importations Tailwind et les styles globaux (variables CSS, réinitialisations)
│ └── tailwind.css # Fichier optionnel pour les directives Tailwind si séparé
├── lib/ # Utilitaires et fonctions d'aide
│ └── utils.js # Fonctions utilitaires diverses
├── hooks/ # Custom Hooks React
│ └── useScrollLock.js # Exemple: hook pour désactiver le défilement du body
├── next.config.js # Configuration principale de Next.js (plugins, redirections, i18n config)
├── postcss.config.js # Configuration de PostCSS (pour Tailwind CSS)
├── tailwind.config.js # Configuration de Tailwind CSS (personnalisation des thèmes, plugins)
├── package.json # Dépendances du projet et scripts NPM/Yarn
├── package-lock.json # Verrouillage des versions des dépendances
└── README.md # Ce fichier

## 5. Internationalisation (i18n)

Le projet est conçu pour être multilingue, supportant actuellement le **français (fr)**, l'**anglais (en)** et l'**allemand (de)**. Les textes de l'interface utilisateur sont gérés via des fichiers JSON situés dans le dossier `locales/`.

Chaque langue possède son propre sous-dossier, contenant des fichiers JSON organisés par section de l'application (ex: `home.json` pour la page d'accueil, `common.json` pour les textes partagés comme la navigation ou le pied de page).

**Comment ajouter une nouvelle langue :**

1.  Créez un nouveau dossier sous `locales/` avec le code de la langue (ex: `es` pour l'espagnol).
2.  Copiez les fichiers JSON existants (`common.json`, `home.json`, etc.) dans ce nouveau dossier.
3.  Traduisez le contenu de ces fichiers JSON dans la nouvelle langue.
4.  Configurez cette nouvelle langue dans `next.config.js` (si vous utilisez la fonctionnalité i18n de Next.js ou une bibliothèque comme `next-i18next`).

## 6. Installation et Lancement du Projet

Suivez ces étapes pour configurer et exécuter l'application sur votre machine locale.

### Prérequis

Assurez-vous d'avoir les éléments suivants installés :

- **Node.js**: Version 18.x ou supérieure (recommandé).
- **npm** ou **Yarn**: Un gestionnaire de paquets (npm est inclus avec Node.js).

### Variables d'Environnement

Le projet utilise des variables d'environnement pour gérer les configurations sensibles ou spécifiques à l'environnement (clés API, URLs de services externes, etc.).

1.  Créez un fichier nommé `.env.local` à la racine du projet. Ce fichier **ne doit pas être commité** dans votre système de contrôle de version.
2.  Ajoutez vos variables d'environnement dans ce fichier. Voici un exemple :

    ```dotenv
    # Fichier: .env.local

    # Variables d'environnement publiques (accessibles côté client)
    NEXT_PUBLIC_VERCEL_ENV=development
    NEXT_PUBLIC_GA_ID=UA-XXXXX-Y # Exemple: Google Analytics ID

    # Variables d'environnement côté serveur (non accessibles côté client)
    API_KEY_EXTERNAL_SERVICE=your_secret_api_key
    DATABASE_URL=postgres://user:password@host:port/database
    ```

    Pour plus d'informations sur les variables d'environnement dans Next.js, consultez la [documentation officielle](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables).

### Scripts de Développement

Une fois les dépendances installées et les variables d'environnement configurées, vous pouvez utiliser les scripts suivants :

- **Installer les dépendances :**

  ```bash
  npm install
  # ou
  yarn install
  ```

- **Lancer l'application en mode développement :**
  Exécute l'application en mode développement avec le rechargement à chaud (Hot Module Replacement).

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

  L'application sera accessible à l'adresse par défaut : `http://localhost:3000`.

- **Construire l'application pour la production :**
  Crée une version optimisée pour la production de votre application. Les fichiers de sortie se trouvent dans le dossier `.next/`.

  ```bash
  npm run build
  # ou
  yarn build
  ```

- **Démarrer l'application en mode production :**
  Lance l'application Next.js compilée pour la production. Exécutez `npm run build` ou `yarn build` avant de lancer cette commande.

  ```bash
  npm run start
  # ou
  yarn start
  ```

- **Vérifier le linting :**
  Exécute ESLint pour détecter les problèmes de code.
  ```bash
  npm run lint
  # ou
  yarn lint
  ```

## 7. Déploiement

Ce projet est configuré pour le déploiement continu (CI/CD) sur **Vercel**. Toute modification poussée sur la branche `main` (ou la branche configurée pour le déploiement) déclenchera automatiquement un nouveau build et un déploiement sur Vercel.

**Processus de déploiement sur Vercel :**

1.  **Connexion GitHub/Vercel**: Assurez-vous que votre dépôt GitHub est lié à votre compte Vercel.
2.  **Webhooks**: Vercel configure automatiquement un webhook sur votre dépôt GitHub.
3.  **Déclenchement**: Chaque `git push` sur la branche configurée (par défaut `main`) enverra une notification à Vercel.
4.  **Build & Déploiement**: Vercel clonera votre dépôt, installera les dépendances, construira l'application (en utilisant `npm run build`), et la déploiera sur un URL unique et ensuite sur votre domaine de production.
5.  **Rollback**: Vercel conserve l'historique des déploiements, permettant des rollbacks faciles en cas de problème.

Pour configurer ou vérifier votre déploiement Vercel, visitez le tableau de bord de votre projet sur [Vercel](https://vercel.com/dashboard).

## 8. Conventions de Code et Bonnes Pratiques

Pour maintenir la qualité et la cohérence du code :

- **ESLint & Prettier**: Le projet est configuré avec ESLint pour le linting du code et Prettier pour le formatage automatique. Il est recommandé d'installer les extensions correspondantes dans votre éditeur de code (VS Code par exemple) et de les configurer pour formater le code à la sauvegarde.
- **Conventions de nommage**:
  - Composants React : PascalCase (ex: `HeroSection.jsx`).
  - Variables et fonctions : camelCase (ex: `isOpen`, `toggleMenu`).
  - Fichiers CSS : kebab-case (ex: `globals.css`).
- **Accessibilité (A11y)**: Prêtez attention à l'accessibilité web lors du développement. Utilisez des balises sémantiques, des attributs `alt` pour les images, des labels pour les formulaires, et assurez-vous que la navigation au clavier est fonctionnelle.
- **Responsive Design**: Testez l'application sur différentes tailles d'écran pour assurer une expérience utilisateur cohérente.
- **Optimisation des performances**: Surveillez les performances de l'application, en particulier le CLS (Cumulative Layout Shift) et le FCP (First Contentful Paint). L'utilisation d'éléments `next/image` et l'optimisation des requêtes sont encouragées.

## 9. Contribution

Nous apprécions grandement toute contribution pour améliorer ce projet. Si vous souhaitez contribuer, veuillez suivre notre processus de contribution :

1.  **Forker le dépôt**: Créez une copie du dépôt sur votre compte GitHub.
2.  **Cloner votre fork**:
    ```bash
    git clone [https://github.com/votre-nom-utilisateur/AWS.git](https://github.com/votre-nom-utilisateur/AWS.git)
    cd AWS
    ```
3.  **Créer une nouvelle branche**:
    Nommez votre branche de manière descriptive (ex: `feature/add-tracking-feature`, `fix/login-bug`).
    ```bash
    git checkout -b feature/nom-de-la-fonctionnalite
    ```
4.  **Effectuer vos modifications**: Codez, testez et assurez-vous que vos modifications respectent les conventions de code.
5.  **Commiter vos changements**:
    Utilisez des messages de commit clairs et concis.
    ```bash
    git commit -m 'feat: ajouter la fonctionnalité de suivi des colis'
    ```
6.  **Pousser la branche vers votre fork**:
    ```bash
    git push origin feature/nom-de-la-fonctionnalite
    ```
7.  **Ouvrir une Pull Request (PR)**:
    Accédez à votre dépôt sur GitHub et cliquez sur "New pull request" pour la branche que vous venez de pousser. Fournissez une description détaillée de vos changements.

## 10. Licence

Ce projet est sous licence [**MIT License**](LICENSE).
