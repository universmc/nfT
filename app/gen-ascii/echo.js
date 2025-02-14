const figlet = require('figlet');
const fs = require('fs');

const phrase = "Hello World";
const style = 'Standard';

// Séparer la phrase en mots
const mots = phrase.split(' ');

// Créer un nouveau fichier pour la phrase complète
fs.writeFileSync('Bonjour.txt', '');

// Générer les images pour chaque mot et les ajouter au fichier principal
mots.forEach((mot, index) => {
  figlet.text(mot, { font: style }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }

    // Ajouter le mot au fichier principal
    fs.appendFileSync('Bonjour.txt', data);

    // Ajouter un espace si ce n'est pas le dernier mot
    if (index < mots.length - 1) {
      fs.appendFileSync('Bonjour.txt', ' ');
    }
  });
});