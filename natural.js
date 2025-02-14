const natural = require('natural');
const Groq = require('groq-sdk');

// Initialiser Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Fonction pour analyser un texte avec natural
async function analyzeText(text) {
  const tokenizer = new natural.WordTokenizer();
  const words = tokenizer.tokenize(text);

  // ... autres traitements avec natural ...

  // Envoyer les résultats à Groq
  const response = await groq.query(/* votre requête Groq */);
  return response;
}

// Exemple d'utilisation
const text = "Le chat est sur le tapis.";
analyzeText(text)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });