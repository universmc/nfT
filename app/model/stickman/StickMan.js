const StickMan = [

    ['░', '░', '░', '█', '░', '░','░'],
    ['░', '░', '░', '█', '░', '░','░'],
    ['░', '░', '█', '█', '█', '░','░'],
    ['░', '█', '░', '█', '░', '█','░'],
    ['░', ' ', '░', '█', '░', '░','░'],
    ['░', '░', '░', '█', '░', '░','░'],
    ['░', '░', '█', '░', '█', '░','░'],
    ['░', '█', '░', '░', '░', '█','░'] // ball
  ];
  
  // Pour ajouter des bras et des jambes :
  const brasGauche = [' ', '/', ' '];
  const brasDroit = [' ', '\\', ' '];
  const jambeGauche = ['/', ' ', ' '];
  const jambeDroite = ['\\', ' ', ' '];
  
  // Fonction pour afficher le StickMan
  function afficherStickman(StickMan) {
    let output = '';
    StickMan.forEach(ligne => {
      output += ligne.join('') + '\n';
    });
    console.log(output);
  }
  
  afficherStickman(StickMan);