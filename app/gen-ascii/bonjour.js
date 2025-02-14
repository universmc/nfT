// Node.js script
const figlet = require('figlet');
const fs = require('fs');

const msg = 'BONJOUR';
const style = 'Standard';

// Générer les images pour chaque lettre
msg.split('').forEach((letter, index) => {
  figlet.text(letter, { font: style }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    fs.writeFileSync(`letter_${index}.txt`, data);
  });
});