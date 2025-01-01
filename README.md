# Style Dictionary with Dark Mode

This project accompanies my blog post on [Medium](https://medium.com/@artur.sopelnik93/how-to-use-design-tokens-with-style-dictionary-and-dark-mode-fdb53f675977) where I explain how to implement Design Tokens with Style Dictionary, focusing on multi-file architecture and dark mode support.

It demonstrates the usage of [Style Dictionary](https://amzn.github.io/style-dictionary/) with TypeScript integration to enhance scalability and developer experience, assuming prior knowledge of [Design Tokens](https://www.designtokens.org/) and Style Dictionary.

## Features

- **Multi-file architecture**: Improved scalability and better project organization.
- **Dark mode support**: Easily toggle between light and dark themes using design tokens.
- **TypeScript integration**: Ensures type safety and better developer experience.

## Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/artursopelnik/style-dictionary-with-dark-mode.git
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Build the Design Tokens

To generate the design tokens and assets, run:

```bash
npm run build
```

This command will generate the output in the build directory.


### 4. Available Commands

- **`npm run build`**: Builds the Style Dictionary and generates the artifacts.
- **`npm start`**: Shortcut to run the build command.
- **`npm run clean`**: Removes all generated artifacts.

### 5. Explore the Output

After building, you will find the generated files in the `build` directory. These files include your design tokens and other necessary assets, ready to be integrated into your projects.

