
# Affiliation Agent - Déploiement Automatisé

Ce projet déploie un agent AI autonome qui génère des articles SEO affiliés toutes les 3 heures.

## Déploiement (Render.com)

1. Crée un compte gratuit sur https://render.com
2. Connecte ton compte GitHub
3. Crée un nouveau "Cron Job" et connecte ce dépôt
4. Ajoute ta clé API OpenAI dans les variables d'environnement : `OPENAI_API_KEY`
5. Déploie et regarde l’agent tourner automatiquement

## Configuration
- Fichier `agentConfig.json` : règle de stratégie
- Fichier `programmes.json` : produits affiliés
- `.env` : ajoute ta clé OpenAI

Articles générés dans le dossier `output/`.
