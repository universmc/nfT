
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const AsciiCodex = `"
./
# ------------------(({ +Facebook })}------------------------
╔═══════════════════════════════════════════════════════════╗
║               _                                           ║
║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║
║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║
║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║
║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
# -------------------------------------(({ +regme })}------------------------------
╔═════════════════════════════════════════════════════════════════════════════════
║[📗 📕 📒]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈codex┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║   
╠═════════════════════════════════════════════════════════════════════════════════╣
║                                                                                 ║
╠═════════════════════════════════════════════════════════════════════════════════╣
║/💻.📡/<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰 ║
╚═════════════════════════════════════════════════════════════════════════════════╝
# -------------------------------------(({ +regme })}------------------------------

# -------------------------------------(({ +regme })}-----------------------------------------------
"`;

const tensorBorders="╔╗╚╝═║╠╣╦╩╬";
const tensorReplie = '├┤┬┴┼╠╣╩';
const tensorRendu = '─│·:░▒▓█';  
const tensorTable = `'${tensorBorders}','${tensorReplie},'${tensorRendu}''`

const dataLoader = `
╔═══════════════════════════════════════════════════════════════════════════════╗
║[💻.📡]<:██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰/║
╚═══════════════════════════════════════════════════════════════════════════════╝
`;
const unit = `[x === width - 1]`

const linearDataLoader = `"'${dataLoader}',${unit}_incrémentation('█+1')"`;

async function asciiCodex() {
  const messages = [
    { role: "user", name: "[📒.codex]", content: "[✨_ia]: Initialisation de l'instance _work_ projet]" },
    { role: "assistant", name: "[📦.Web-Worker]", content: `[📦algo_Pibot]: Expert en Generetion de contenu algorithmics, full .endpoint` },
    { role: "assistant", name: "[📘.Agent]", content: `[📘_neoFs]:Expert FullStack DevOps` },
    { role: "system", name: "introduction_event", content: `[🤖_Gemini]:Tu es invitée à participer à un défi spécial d'intelligence artificielle. Serais-tu intéressée par les fonctionnalité des ${tensorTable} pour le developpement de notre interface Graphique Ascii et ${linearDataLoader} ? ✨` },
  // { role: "user", name: "ollama_accept", content: "[✨_ia]::Je suis prête à relever le défi ! Peux-tu m'en dire plus ?" },
  // { role: "assistant", name: "description_event", content: "Le défi est de produire grid avec des <input> case ia." },
  ];
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 2048
    });

    const completionText = chatCompletion.choices[0]?.message?.content || "Pas de réponse générée";
    console.log("Réponse générée par l'assistant :", completionText);
  } catch (error) {
    console.error("Erreur lors de la génération de la complétion :", error.message);
  }
}

asciiCodex();
