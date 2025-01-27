const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const yaml = require('js-yaml');

// Load configuration from config.yaml
const config = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
const wrapperClass = config.wrapper_class || '.md';
const removeWrapper = config.remove_wrapper || false;
const outputDirectory = config.output_directory || 'build';
const fileNamingConvention = config.file_naming_convention || 'github-markdown-tailwind.css';

// Read the downloaded CSS file
const cssFilePath = path.join(outputDirectory, 'github-markdown.css');
const cssContent = fs.readFileSync(cssFilePath, 'utf8');

// Process the CSS content with Tailwind CSS JIT mode
postcss([
  tailwindcss({
    mode: 'jit',
    purge: [cssFilePath],
    corePlugins: {
      preflight: false,
    },
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }),
])
  .process(cssContent, { from: undefined })
  .then((result) => {
    let tailwindCssContent = result.css;

    // Add wrapper class if not removed
    if (!removeWrapper) {
      tailwindCssContent = `${wrapperClass} { ${tailwindCssContent} }`;
    }

    // Write the generated Tailwind CSS file
    const outputFilePath = path.join(outputDirectory, fileNamingConvention);
    fs.writeFileSync(outputFilePath, tailwindCssContent, 'utf8');
    console.log(`Generated Tailwind CSS file: ${outputFilePath}`);
  })
  .catch((error) => {
    console.error('Error processing CSS with Tailwind CSS JIT mode:', error);
  });
