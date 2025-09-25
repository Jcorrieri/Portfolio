const fs = require('fs');
const path = require('path');

const marked = require('marked');

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const filename = process.argv[2]
const inputPath = path.join(__dirname, "../articles/markdown", filename + '.md');
const outputPath = path.join(__dirname, "../articles/", filename + ".html");

const categories = process.argv[3]
    .split(",")
    .map(cat => cat.trim().toLowerCase());

const keywords = process.argv[4]
    .split(',')
    .map(keyword => keyword.trim().toLowerCase());

const prettyTitle = filename
    .split('_')
    .map(tok => tok[0].toUpperCase() + tok.substring(1))
    .toString()
    .replaceAll(",", " ");

const markdown = fs.readFileSync(inputPath, "utf-8").replaceAll("../../", "../");
const rawHTML = marked.parse(markdown);
const cleanHTML = DOMPurify.sanitize(rawHTML);

const content = `<!DOCTYPE html>
<html class="no-js scroll-smooth" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${prettyTitle}</title>

    <meta name="description" content="${prettyTitle} academic blog page article">

    <meta property="og:title" content="${prettyTitle} Article">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:image:alt" content="Preview of ${prettyTitle} Article">

    <link rel="icon" href="../media/icon.png" sizes="any">
    <link rel="apple-touch-icon" href="../media/icon.png">

    <link rel="manifest" href="../site.webmanifest">
    <meta name="theme-color" content="#fafafa">

    <script>
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }
    </script>
</head>

<body class="bg-white text-black dark:bg-gray-900 dark:text-white">

    <header class="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-800 dark:shadow-lg">
        <div class="max-w-5xl mx-auto flex justify-between items-center p-6">
            <h1 class="text-3xl font-bold tracking-tight dark:text-white">Study Blog</h1>

            <!-- Hamburger toggle (mobile only) -->
            <button id="menu-toggle" class="sm:hidden text-gray-800 dark:text-gray-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            <!-- Nav links (hidden on mobile until toggled) -->
            <nav id="nav-menu"
                 class="hidden flex-col sm:flex items-center sm:flex-row gap-6 sm:divide-none divide-y divide-gray-400 dark:divide-gray-600 text-lg sm:text-base font-medium absolute sm:static top-full left-0 w-full sm:w-auto bg-white dark:bg-gray-800 p-6 sm:p-0 shadow-md sm:shadow-none z-40">
                <a href="../study.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">← Back</a>
                <a href="#article" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Scroll to Top</a>
                <button id="theme-toggle"
                        class="cursor-pointer inline-flex items-center w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    Dark Mode <span class="text-2xl ml-2">◐</span>
                </button>
            </nav>
        </div>

    </header>

    <main class="max-w-5xl mx-auto py-12 px-4 min-h-screen">
        <article id="article" class="prose prose-neutral dark:prose-invert max-w-none scroll-mt-[20vh] prose-pre:bg-neutral-200 prose-pre:text-neutral-900 dark:prose-pre:bg-gray-950 dark:prose-pre:text-gray-300">
            ${cleanHTML}
        </article>
    </main>

    <footer class="text-center py-6 mt-20 text-sm text-gray-500 dark:text-gray-400">
        &copy 2025 Jacomo Corrieri - Built with Webpack and Tailwind CSS. Icons by <a class="underline"
                                                                                      href="https://icons8.com/"
                                                                                      target="_blank">Icons8</a>
    </footer>

</body>
</html>
`

fs.writeFileSync(outputPath, content);
console.log("HTML file written to ", outputPath);

const catMap = new Map();
catMap.set('cv', '<li class="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">Computer Vision</li>');
catMap.set('math', '<li class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Mathematics</li>');
catMap.set('ml', '<li class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Machine Learning</li>');
catMap.set('rl', '<li class="bg-gray-200 text-gray-900 text-xs font-medium px-2 py-1 rounded-full">Reinforcement Learning</li>');
catMap.set('web development', '<li class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Web Development</li>');

const galleryCode = `<a href="./articles/${filename}.html"
   target="_self"
   class="article-link"
   data-title="${prettyTitle.toLowerCase()}"
   data-keywords="${keywords}"
   data-categories="${categories}"
>
    <div class="bg-white border-gray-300 rounded-lg shadow-sm border hover:cursor-pointer hover:opacity-85 hover:scale-102 transition-transform duration-200 dark:bg-gray-800 dark:border-gray-700 overflow-clip">
        <img src="./media/article-images/${filename}/${filename}.png" alt="Preview 2" class="w-full aspect-[16/9] h-48 object-cover" />
        <div class="text-xs px-4 pt-4">
            <ul class="flex flex-wrap gap-2">
                ${categories.map(cat => catMap.get(cat)).toString().replaceAll(',', '\n')}
            </ul>
        </div>
        <div class="p-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white text-wrap">${prettyTitle}</h2>
        </div>
    </div>
</a>
`

console.log(galleryCode);