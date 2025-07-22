const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
};

export default config;
