// Node.js script
const figlet = require('figlet');
const fs = require('fs');

const phrase = "Google For Gemini";
const style = 'Doom';

// Séparer la phrase en mots
const mots = phrase.split(' ');

// Générer les images pour chaque mot
mots.forEach((mot, index) => {
  figlet.text(mot, { font: style }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    fs.writeFileSync(`meta_${index}.txt`, data);
  });
});