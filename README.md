# test-technique-oneplayer
Test technique OnePlayer for Canal+ Tech

# Cahier des charges 

- Lire le flux fourni « Big Buck Bunny » avec le rx-player (qui est open source!) ✔️

- Créer une interface minimaliste pour diriger le player (play/pause et barre d’avancement pour naviguer dans le flux) en créant tes composants ✔️

- Récupérer et mettre en forme des données liées au flux vidéo fournies par notre API (à minima la route scene/{timecode} ✔️

- Livrer un code source de l’exercice (Github ou fichier zip par exemple) ✔️

- N’hésite pas à nous faire part de tes choix dans un fichier README ✔️

# Lancer le projet
- npm install && npm run dev

# Choix techniques

- Création du projet en utilisant Vite => J'avais commencé avec create-react-app mais j'étais curieux d'utiliser Vite
- Ajout de prettier et eslint pour assurer une qualité de code
- Ajout de husky pour améliorer mes commits
- Ajout de tailwind pour la partie CSS

# Axes d'amélioration/Reste à faire
- Amélioration les performances de chargement des détails des différentes scènes
- Plus de tests unitaires => j'ai eu quelques difficultés à mock le rx-player
- Revoir les bonnes pratiques sur les composants en ReactJs
- UX/UI
