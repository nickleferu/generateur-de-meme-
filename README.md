🎉 Générateur de Mèmes
Bienvenue sur le Générateur de Mèmes, un site interactif qui permet de créer, personnaliser et partager des mèmes, avec une intégration d'une IA pour générer des blagues sur mesure.


🚀 Fonctionnalités principales:
🖼️ 1. Téléchargement d’images
          Les utilisateurs peuvent importer leurs propres images depuis leur ordinateur pour créer des mèmes uniques.
✍️ 2. Ajout de texte personnalisé
          Possibilité d’ajouter du texte en haut et en bas de l’image, changer les couleurs du texte personnalisable à tout moment.
👀 3. Aperçu en temps réel
          Visualisation instantanée des modifications de texte et d’image grâce à un aperçu en direct.
📥 4. Téléchargement du mème
          Les utilisateurs peuvent télécharger leur mème finalisé directement sur leur appareil.
📲 5. Partage sur Facebook et WhatsApp
        Partage facile des mèmes directement sur :
            -Facebook ✅
            -WhatsApp ✅
🖼️ 6. Galerie des mèmes
          Une galerie intégrée permet de visualiser les mèmes précédemment créés et téléchargés.
🤖 7. Générateur de blagues IA
        Une IA intégrée génère des blagues personnalisées à partir d’un contexte donné par l’utilisateur :
                    Blague unique et drôle générée en temps réel via l'API Hugging Face.


🧠 Technologies utilisées
      - HTML / CSS / JavaScript (Vanilla JS)
      - Canvas API pour l'édition des mèmes.
      - Hugging Face Inference API pour la génération de blagues.
      - Partage via URL API de Facebook et WhatsApp pour les réseaux sociaux.
      - Cloudinary API : stockage et gestion des images en ligne.

📦 Arborescence du projet
/generateur-de-meme-/
│
├── acceuil.html          // Page d'accueil
├── generateur.html       // Générateur de mèmes
├── ia.html               // Générateur de blagues IA
├── script.js             // Script pour les mèmes et le partage
├── scriptia.js           // Script pour l'IA (blagues)
├── styles.css            // Feuille de style
├── /images/              // Dossier pour images et mèmes
└── README.md             // Ce fichier


⚙️ Installation et utilisation
1. Cloner le projet
git clone https://github.com/nickleferu/generateur-de-meme-.git
cd generateur-de-meme-

2. Lancer le projet localement
    - Ouvre acceuil.html dans ton navigateur.
    - Navigue entre les différentes pages : generateur.html, ia.html.
  
🔑 Configuration de la clé API Hugging Face pour les blagues
1. Créer un compte Hugging Face (gratuit)
        👉 https://huggingface.co/join
2. Générer une clé API
        👉 https://huggingface.co/settings/tokens
                Permissions : "read"
                Copier la clé générée.

4. Ajouter la clé API au projet
Dans le fichier scriptia.js :
const apiKey = "hf_ta_cle_api"; // Remplacer par ta vraie clé API Hugging Face

🎯 Fonctionnalités détaillées
- Fonctionnalité	Fichier concerné	Description
- Page d'accueil	acceuil.html	Navigation vers les générateurs.
- Générateur de mèmes	generateur.html	Créer un mème, ajouter texte, télécharger, partager.
- Galerie	generateur.html	Visualisation des mèmes créés.
- Générateur de blagues IA	ia.html	Génération de blagues sur contexte donné.
- Partage Facebook / WhatsApp	generateur.html	Boutons intégrés pour partage direct.
- 📲 Partage sur réseaux sociaux
        Les utilisateurs peuvent partager leur mème directement :
            Sur Facebook via un lien de partage automatique.
            Sur WhatsApp en un clic.

⚠️ Remplacer URL_DU_MEME par le lien du mème à partager (généré ou hébergé).
⚠️ Remarques importantes
⚠️ Ne pas partager ta clé API Hugging Face publiquement.
⚠️ Pour un site officiel/public, il est conseillé de gérer les appels API via un backend sécurisé.
⚠️ Hugging Face API a un quota gratuit, au-delà, un abonnement est requis : https://huggingface.co/pricing.


📬 Contact
GitHub : https://github.com/nickleferu
Email : n.bekolo13@gmail.com


