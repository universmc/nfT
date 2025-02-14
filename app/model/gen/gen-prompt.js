// Node.js script
const figlet = require('figlet');
const fs = require('fs');

const prompt = "Google for Gemini";
const style = 'Doom';

// Séparer la prompt en meta
const meta = prompt.split(' ');

// Générer les images pour chaque mot
meta.forEach((mot, index) => {
  figlet.text(mot, { font: style }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    fs.writeFileSync(`mot_${index}.txt`, data);
  });
});