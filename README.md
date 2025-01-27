# github-markdown-tailwindcss

GitHub Markdown CSS styles converted into TailwindCSS-formatted styles.

## Configuration

This repository includes a `config.yaml` file in the root directory that allows for flexible configuration of the wrapper style name and other options. The following keys are available in the `config.yaml` file:

* `wrapper_class`: The name of the wrapper class to be used for scoping styles (default: `.md`)
* `remove_wrapper`: A boolean option to remove the wrapper class altogether (default: `false`)
* `output_directory`: The directory where the generated Tailwind CSS file will be stored (default: `build`)
* `file_naming_convention`: The naming convention for the generated Tailwind CSS file (default: `github-markdown-tailwind.css`)

## Usage Guide

1. Clone the repository and navigate to the root directory.
2. Install the necessary dependencies by running `npm install`.
3. Customize the `config.yaml` file with your desired configuration options.
4. Run the conversion script to generate the Tailwind CSS file.
5. The generated Tailwind CSS file will be stored in the specified output directory.

For more details on how to set up and use Tailwind CSS JIT mode, refer to the official Tailwind CSS documentation.
