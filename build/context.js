const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {

    const signePlage = "creation d'un bank de prompt --description de wirefram de siteweb (index (html:5,css,scss,svg,js,json)) en lang:Fr"

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
