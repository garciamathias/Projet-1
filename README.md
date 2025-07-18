# Site Vitrine - Christiane Sophro

Site vitrine élégant pour une sophrologue, développé avec Next.js. Design inspiré d'une fleur d'iris blanche avec une palette de couleurs apaisantes et des animations CSS douces.

## 🎨 Design & Couleurs

### Palette de couleurs
- **Blanc/Ivoire** : `#FAFAF5` - Couleur de fond principal
- **Vert doux naturel** : `#8BA893` - Couleur principale (sage)
- **Jaune pâle** : `#F6E6B4` - Accent lumineux (cream)
- **Mauve léger** : `#D6C4E9` - Accent discret (lavender)

### Polices
- **Titres** : Playfair Display (serif élégant)
- **Texte courant** : Inter (sans-serif moderne)

## 🏗️ Structure du Site

Le site comprend 6 pages principales :

1. **Accueil** (`/`) - Présentation générale de la sophrologie
2. **Prestations & Lieux** (`/prestations`) - Détail des services proposés
3. **Sophrologie Adultes** (`/sophrologie-adultes`) - Spécifique aux adultes
4. **Sophrologie Enfants** (`/sophrologie-enfants`) - Spécifique aux enfants
5. **Qui suis-je ?** (`/qui-suis-je`) - Présentation personnelle
6. **Planning** (`/planning`) - Calendrier et réservations

## 📁 Architecture du Projet

```
/
├── components/
│   ├── Layout.js              # Layout principal avec navigation
│   └── Layout.module.css      # Styles du layout
├── pages/
│   ├── _app.js               # Configuration Next.js
│   ├── _document.js          # Structure HTML de base
│   ├── index.js              # Page d'accueil
│   ├── prestations.js        # Page prestations
│   ├── sophrologie-adultes.js # Page adultes
│   ├── sophrologie-enfants.js # Page enfants
│   ├── qui-suis-je.js        # Page présentation
│   └── planning.js           # Page planning
├── public/
│   ├── favicon.svg           # Favicon principal
│   └── favicon.ico           # Favicon de fallback
├── styles/
│   └── globals.css           # Styles globaux
├── package.json              # Dépendances
├── next.config.js            # Configuration Next.js
└── README.md                 # Ce fichier
```

## 📝 Comment Modifier le Contenu

### 1. Modifier la Page d'Accueil

**Fichier :** `pages/index.js`

**Sections à modifier :**
- **Hero section** : Titre principal et sous-titre
- **Bienfaits** : Liste des bénéfices de la sophrologie
- **Déroulement** : Étapes d'une séance

**Exemple de modification :**
```jsx
<h1 className="floral-accent">Votre nouveau titre</h1>
<p className="hero-subtitle">
  Votre nouvelle description...
</p>
```

### 2. Modifier les Prestations

**Fichier :** `pages/prestations.js`

**Sections principales :**
- **Séances de groupe adultes** : Thématiques et descriptions
- **Séances enfants** : Modalités ludiques
- **Séances individuelles** : Accompagnement personnalisé

**Pour ajouter une nouvelle thématique :**
```jsx
<div className="theme-card fade-in">
  <h4>Nouvelle thématique</h4>
  <p className="theme-goal">Objectif de la thématique</p>
  <div className="theme-content">
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li>Point 3</li>
    </ul>
  </div>
</div>
```

### 3. Modifier la Page "Qui suis-je ?"

**Fichier :** `pages/qui-suis-je.js`

**Sections à personnaliser :**
- **Parcours** : Histoire personnelle
- **Mission** : Approche et valeurs
- **Formation** : Diplômes et certifications
- **Contact** : Informations de contact

### 4. Modifier les Informations de Contact

**Fichiers concernés :**
- `components/Layout.js` (footer)
- `pages/qui-suis-je.js` (section contact)
- `pages/planning.js` (contact direct)

**Remplacer :**
- Email : `christiane.sophro@gmail.com`
- Réseaux sociaux : `@christiane.sophro`

## 📅 Configuration de la Réservation en Ligne (SimplyBook.it)

### Système de Réservation Intégré

Le site utilise **SimplyBook.it** comme système de réservation en ligne, permettant aux clients de :
- ✅ Consulter les créneaux disponibles en temps réel
- ✅ Réserver directement leurs séances
- ✅ Recevoir une confirmation automatique
- ✅ Gérer leurs rendez-vous

### URL de Réservation Actuelle

Le site est configuré avec : **https://csophro.simplybook.it**

### Gestion des Réservations

**Pour gérer votre planning :**
1. **Connectez-vous** à votre compte SimplyBook.it
2. **Configurez vos services** : 
   - Séances de groupe adultes (1h)
   - Séances individuelles adultes (1h15)  
   - Séances enfants (40min)
   - Séances parent/enfant (50min)
3. **Définissez vos horaires** de disponibilité
4. **Paramétrez les tarifs** et options de paiement

### Modifier l'URL de Réservation

**Fichier :** `pages/planning.js`

**Ligne à modifier :**
```javascript
const bookingUrl = "https://csophro.simplybook.it"
```

**Remplacer par votre nouvelle URL :**
```javascript
const bookingUrl = "https://votre-nouveau-lien.simplybook.it"
```

### Avantages de SimplyBook.it

- 🔄 **Synchronisation automatique** des créneaux
- 📧 **Notifications email** pour vous et vos clients  
- 💳 **Paiement en ligne** (optionnel)
- 📱 **Interface mobile** optimisée
- 📊 **Statistiques** de réservation
- 🔗 **Intégration facile** dans le site web

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repository GitHub
3. Importer le projet
4. Déploiement automatique à chaque push

**Étapes détaillées :**
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Déployer
vercel

# 4. Déploiement en production
vercel --prod
```

### Option 2 : Netlify

1. Créer un compte sur [Netlify](https://netlify.com)
2. Glisser-déposer le dossier du projet
3. Ou connecter le repository GitHub pour déploiement automatique

### Option 3 : Hébergement traditionnel

```bash
# 1. Générer les fichiers statiques
npm run build
npm run export

# 2. Uploader le contenu du dossier 'out' vers votre hébergeur
```

## 🛠️ Développement Local

### Installation

```bash
# 1. Cloner le projet
git clone [URL_DU_REPO]

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Construction pour production
npm run start    # Démarrer la version de production
npm run lint     # Vérification du code
```

## 🎨 Personnalisation du Design

### Modifier les Couleurs

**Fichier :** `styles/globals.css`

```css
:root {
  --color-ivory: #FAFAF5;      /* Blanc/Ivoire */
  --color-sage: #8BA893;       /* Vert doux */
  --color-cream: #F6E6B4;      /* Jaune pâle */
  --color-lavender: #D6C4E9;   /* Mauve léger */
}
```

### Modifier les Polices

**Fichier :** `pages/_app.js`

Changer l'URL Google Fonts :
```jsx
<link 
  href="https://fonts.googleapis.com/css2?family=NOUVELLE_POLICE" 
  rel="stylesheet" 
/>
```

Puis dans `styles/globals.css` :
```css
--font-heading: 'Nouvelle Police', serif;
--font-body: 'Nouvelle Police', sans-serif;
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints à :
- Mobile : `480px` et moins
- Tablette : `768px` et moins  
- Desktop : `1024px` et plus

## 🔍 SEO

### Balises Meta Incluses

- Title et description pour chaque page
- Open Graph pour les réseaux sociaux
- Mots-clés pertinents
- Favicon SVG et ICO

### Améliorer le SEO

1. **Ajouter Google Analytics** :
```jsx
// Dans pages/_app.js
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

2. **Ajouter un sitemap** :
Créer `public/sitemap.xml`

3. **Optimiser les images** :
Utiliser `next/image` pour l'optimisation automatique

## 🆘 Support et Maintenance

### Problèmes Courants

**Le système de réservation ne s'affiche pas :**
- Vérifier que l'URL SimplyBook.it est correcte
- S'assurer que votre compte SimplyBook.it est actif
- Vérifier que les services sont bien configurés
- Tester l'URL directement dans le navigateur

**Erreurs de build :**
- Vérifier que toutes les dépendances sont installées : `npm install`
- Vérifier la syntaxe JSX et CSS

**Problèmes de responsive :**
- Tester sur différents appareils
- Utiliser les outils de développement du navigateur

### Contacts Techniques

Pour toute question technique sur ce site :
- Consulter la [documentation Next.js](https://nextjs.org/docs)
- Vérifier les [issues GitHub de Next.js](https://github.com/vercel/next.js/issues)

## 📋 Checklist de Déploiement

- [x] Configurer SimplyBook.it (déjà fait avec https://csophro.simplybook.it)
- [ ] Vérifier toutes les informations de contact
- [ ] Tester le site en local
- [ ] Optimiser les images si ajoutées
- [ ] Configurer le domaine personnalisé
- [ ] Tester la version mobile
- [ ] Vérifier les liens de navigation
- [ ] Configurer Google Analytics (optionnel)
- [ ] Paramétrer les services dans SimplyBook.it
- [ ] Tester le système de réservation

## 🔄 Mises à Jour Futures

Pour mettre à jour le contenu :

1. **Modifier les fichiers** selon les sections ci-dessus
2. **Tester en local** avec `npm run dev`
3. **Déployer** via Vercel/Netlify ou upload FTP

Le site étant développé en Next.js, il est facilement maintenable et extensible pour de futures fonctionnalités.

---

**Développé avec ❤️ pour Christiane Sophro**

*Ce site utilise Next.js, React et CSS moderne pour une expérience utilisateur optimale sur tous les appareils.* 