// Node.js script
const figlet = require('figlet');
const fs = require('fs');

const mot = "Gemini";
const style = 'Standard';

// Séparer la mot en meta
const meta = mot.split(' ');

// Générer les images pour chaque token
meta.forEach((token, index) => {
  figlet.text(token, { font: style }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    fs.writeFileSync(`token_${index}.txt`, data);
  });
});