
const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const config = JSON.parse(fs.readFileSync('./agentConfig.json'));
const produits = JSON.parse(fs.readFileSync('./programmes.json'));

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

async function generateArticle() {
  const niche = config.niches_prioritaires[Math.floor(Math.random() * config.niches_prioritaires.length)];
  const produitsFiltres = produits.filter(p => p.commission >= config.produit_affilié.commission_min && p.prix >= config.produit_affilié.prix_min);
  const produit = produitsFiltres[Math.floor(Math.random() * produitsFiltres.length)];

  const prompt = `Rédige un article SEO de ${config.contenu.longueur_min} mots sur la niche "${niche}" en incluant le produit suivant : ${produit.nom} (${produit.lien_affiliation}). Ton : ${config.contenu.ton}. Format : ${config.contenu.format}`;
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });

  const output = response.data.choices[0].message.content;
  fs.writeFileSync(`./output/article_${Date.now()}.md`, output);
  console.log("Article généré !");
}

generateArticle();
