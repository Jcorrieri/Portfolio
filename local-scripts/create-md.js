const fs = require('fs');
const path = require('path');

const filename = process.argv[2]
    .trim()
    .toLowerCase()
    .replaceAll(" ", "_");

const outputPath = path.join(__dirname, "../articles/markdown", filename + ".md");
const mediaOutputPath = path.join(__dirname, "../media/article-images/", filename);
const placeholderImgPath = path.join(__dirname, "../media/article-images", "placeholder.png");

const content = `# Page Title

Description

> Tags: tag1, tag2

---

## Heading

---

## Images

Light: \\<img class="m-auto dark:hidden" src="../../media/article-images/article_title/image.svg" width="300" alt="alt-text">

Dark: \\<img class="m-auto hidden dark:block" src="../../media/article-images/article_title/image-dark.svg" width="300" alt="alt-text">

Caption: \\<p class="text-center m-auto italic">Figure n. Caption text</p>
`

fs.writeFileSync(outputPath, content);

fs.mkdirSync(mediaOutputPath);
fs.copyFileSync(placeholderImgPath, mediaOutputPath + `/${filename}.png`);

console.log("Markdown file saved to ", outputPath);