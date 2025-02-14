const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {

    const signePlage = "La page d'accueil sera composée d'un header avec le logo et une barre de navigation principale. Le contenu principal sera divisé en trois colonnes utilisant une grille CSS. La colonne de gauche contiendra un carrousel d'images, la colonne centrale présentera les principaux services offerts et la colonne de droite affichera des témoignages clients. Le pied de page contiendra les mentions légales, les liens vers les réseaux sociaux et un formulaire de contact."

    const contexte = `${signePlage}: page accueil`;

    groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Convertir ${contexte} ce contexte au format html pour servir d'index.html.`
            },
            {
                role: "assistant",
                content: `Ta réponse doit intégralement être rédigé au format HTML, respectant les normes du Web sémantique W3C`
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.8,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion) => {
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "Json_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Documentation générée et enregistrée dans " + outputFilePath);
    });
}
main();
