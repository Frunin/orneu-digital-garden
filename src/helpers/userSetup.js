const fs = require("fs");
const path = require("path");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  eleventyConfig.addCollection("orneuImages", function(collectionApi) {
    // Absolute path to your images folder
    const imagesDir = path.join(__dirname, "src/site/img/user/Orneu/Documentos");

    // Read all files synchronously
    let files = [];
    try {
      files = fs.readdirSync(imagesDir);
    } catch (err) {
      console.error("Error reading images directory:", err);
    }

    // Filter for image files and map to objects with name and relative path for URL use
    const imageFiles = files
      .filter(file => file.match(/\.(png|jpe?g|gif|webp)$/i))
      .map(file => ({
        name: file,
        path: `/img/user/Orneu/Documentos/${file}`
      }));

    return imageFiles;
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
