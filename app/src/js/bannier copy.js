const FramWork = [
	{
		"image":"Fram1.png",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"Fram2.png",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"Fram3.png",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"Fram4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];

/* ADD eventListener */

 let bouton1 = document.getElementById("start1");
 bouton1.addEventListener("click", () => {
 	console.log("click start:true ")
 });

 let bouton2 = document.getElementById("bouton2");
 bouton2.addEventListener("click", () => {
    console.log("click recoard:true ")
 });



// Créez les bullet points (dots) en fonction du nombre de FramWork
let numberOfFrams = FramWork.length;
const dotsContainer = document.querySelector('.dots');
for (let i = 0; i < numberOfFrams; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dotsContainer.appendChild(dot);
}

// Marquez le premier bullet point comme actif
dotsContainer.firstChild.classList.add('dot_selected');




/*  STEP 3 click SLIDERS UPDATE  */ 

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour aller à la Fram suivante
function goToNextFram() {
    if (currentIndex === numberOfFrams - 1) {
        currentIndex = 0; // Revenir au début si c'est la dernière Fram
    } else {
        currentIndex++;
    }
    updateFramSet();
}


// Fonction pour aller à la Fram précédente
function goToPrevFram() {
    if (currentIndex === 0) {
        currentIndex = numberOfFrams - 1; // Passer à la dernière Fram si c'est la première
    } else {
        currentIndex--;
    }
    updateFramSet();
}
// Fonction pour mettre à jour les bullet points
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('dot_selected');
    });
    dots[currentIndex].classList.add('dot_selected');
}

 

// Fonction pour mettre à jour le carrousel
function updateFramSet() {
    const bannerImg = document.querySelector('.banner-img');
    bannerImg.src = 'src/ban/' + FramWork[currentIndex].image;
    const taglineDiv = document.querySelector('.arrow-content p');
    taglineDiv.innerHTML = FramWork[currentIndex].tagLine;

    updateDots(); // Mettre à jour les bullet points
}

bouton1.addEventListener("click", goToPrevFram);
bouton2.addEventListener("click", goToNextFram);


// condition de bord

function goToNextFram() {
    if (currentIndex === numberOfFrams - 1) {
        currentIndex = 0; // Revenir au début si c'est la dernière Fram
    } else {
        currentIndex++;
    }
    updateFramSet();
}


// Fonction pour aller à la Fram précédente
function goToPrevFram() {
    if (currentIndex === 0) {
        currentIndex = numberOfFrams - 1; // Passer à la dernière Fram si c'est la première
    } else {
        currentIndex--;
    }
updateFramSet()};