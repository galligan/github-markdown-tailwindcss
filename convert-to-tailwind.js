const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const yaml = require('js-yaml');

// Validate configuration values
function validateConfig(config) {
  const requiredKeys = ['wrapper_class', 'remove_wrapper', 'output_directory', 'file_naming_convention'];
  const missingKeys = requiredKeys.filter(key => !(key in config));
  
  if (missingKeys.length > 0) {
    throw new Error(`Missing required configuration keys: ${missingKeys.join(', ')}`);
  }
  
  if (typeof config.wrapper_class !== 'string' || !config.wrapper_class.trim()) {
    throw new Error('wrapper_class must be a non-empty string');
  }
  
  if (typeof config.remove_wrapper !== 'boolean') {
    throw new Error('remove_wrapper must be a boolean');
  }
  
  if (typeof config.output_directory !== 'string' || !config.output_directory.trim()) {
    throw new Error('output_directory must be a non-empty string');
  }
  
  if (typeof config.file_naming_convention !== 'string' || !config.file_naming_convention.trim()) {
    throw new Error('file_naming_convention must be a non-empty string');
  }
}

// Load configuration from config.yaml
let config;
try {
  config = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
  validateConfig(config);
} catch (error) {
  console.error('Error loading configuration:', error.message);
  process.exit(1);
}

const {
  wrapper_class: wrapperClass = '.md',
  remove_wrapper: removeWrapper = false,
  output_directory: outputDirectory = 'build',
  file_naming_convention: fileNamingConvention = 'github-markdown-tailwind.css'
} = config;

// Read the downloaded CSS file
const cssFilePath = path.join(outputDirectory, 'github-markdown.css');
let cssContent;
try {
  if (!fs.existsSync(cssFilePath)) {
    throw new Error(`CSS file not found: ${cssFilePath}`);
  }
  cssContent = fs.readFileSync(cssFilePath, 'utf8');
  if (!cssContent.trim()) {
    throw new Error('CSS file is empty');
  }
} catch (error) {
  console.error('Error reading CSS file:', error.message);
  process.exit(1);
}

// Process the CSS content with Tailwind CSS
postcss([
  tailwindcss({
    content: [cssFilePath],
    corePlugins: {
      preflight: false,
    },
    theme: {
      extend: {},
    },
    plugins: [],
  }),
  autoprefixer
])
  .process(cssContent, { 
    from: cssFilePath,
    to: path.join(outputDirectory, fileNamingConvention)
  })
  .then((result) => {
    let tailwindCssContent = result.css;

    // Add wrapper class if not removed
    if (!removeWrapper) {
      tailwindCssContent = `${wrapperClass} { ${tailwindCssContent} }`;
    }

    // Write the generated Tailwind CSS file
    try {
      // Ensure output directory exists
      if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
      }
      
      const outputFilePath = path.join(outputDirectory, fileNamingConvention);
      
      // Validate generated CSS
      if (!tailwindCssContent.trim()) {
        throw new Error('Generated CSS content is empty');
      }
      
      fs.writeFileSync(outputFilePath, tailwindCssContent, 'utf8');
      console.log(`Generated Tailwind CSS file: ${outputFilePath}`);
    } catch (error) {
      console.error('Error writing output file:', error.message);
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error processing CSS with Tailwind CSS:', error);
  });
