// next-i18next.config.js
const path = require("path");
const apiKey = process.env.I18NEXT_API_KEY;
module.exports = {
  i18n: {
    defaultLocale: "en", // Defina o idioma padrão
    locales: ["en", "es", "pt"], // Adicione os idiomas suportados
  },
  backend: {
    loadPath: `https://api.i18nexus.com/project-id/language-code.json?api_key=${apiKey}`, // Substitua project-id e YOUR_API_KEY pelos valores do i18nexus
  },
};
