{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "declaration": true
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.stories.*",
    "**/*.test.*"
  ]
}