# Style Dictionary with Dark Mode

This project demonstrates the implementation of a multi-file approach for [Style Dictionary](https://amzn.github.io/style-dictionary/) using file extensions and TypeScript. It assumes prior knowledge of [Design Tokens](https://www.designtokens.org/) and Style Dictionary.

## Features

- Multi-file architecture for better scalability and organization.
- Dark mode support for design tokens.
- TypeScript integration for type safety and enhanced developer experience.

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/artursopelnik/style-dictionary-with-dark-mode.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Style Dictionary

To generate the design tokens, run:

```bash
npm run build
```

This command will build and output the generated artifacts.

### 4. Available Commands

- **`npm run build`**: Builds the Style Dictionary and generates the artifacts.
- **`npm start`**: Shortcut to run the build command.
- **`npm run clean`**: Removes all generated artifacts.

### 5. Explore the Output

After running the build command, you will find the generated files in the `build` directory. These files include the tokens and other assets ready for use in your projects.
