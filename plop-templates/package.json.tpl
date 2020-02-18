{
  "name": "@dex/{{libName}}",
  "version": "0.0.1",
  "author": "{{authorName}} <{{authorEmail}}>",
  "description": "> TODO: description",
  "license": "MIT",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "jsnext:main": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "rimraf ./dist && rollup -c",
    "test": "jest"
  },
  "jest": {
    "setupFilesAfterEnv": [
      "../../.jest/setup.ts"
    ],
    "preset": "ts-jest",
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy"
    }
  },
  "peerDependencies": {
    "react": ">=16.8",
    "react-dom": ">=16.8",
    "reactstrap": ">=8"
  },
  "dependencies": {},
  "devDependencies": {}
}
