# Contributing

## Recommended vsCode plugins

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx): Provides syntax highlighting and bracket matching for MDX (JSX in Markdown) files.
- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html): Adds syntax highlighting and language support for html inside of JavaScript and TypeScript tagged template strings, such as used in lit-html and other frameworks.

## Project conventions

Project uses [conventional commits](https://www.conventionalcommits.org/).

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of (a change log for example). This convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```commit
type(scope?): subject  #scope is optional

(body?)

(footer?)
```

Real world examples can look like this:

A fix

```commit
fix(my-component-package-name): fix typo in package REAME.md
```

A new feature

```commit
feat(my-component-package-name): add XXX
```

A breaking change

```commit
feat(my-component-package-name): refactor XXX component

BREAKING CHANGE: property XXX removed
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. `fix`: a commit of the type fix patches a bug in your codebase (this correlates with **PATCH in semantic versioning**).
2. `feat`: a commit of the type feat introduces a new feature to the codebase (this correlates with **MINOR in semantic versioning**).
3. `BREAKING CHANGE`: a commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change (correlating with **MAJOR in semantic versioning**). A BREAKING CHANGE can be part of commits of any type.
4. Others commit types are `build`, `ci`, `chore`, `docs`, `style`, `refactor`, `perf`, `test` and `revert`.

Since this repository is a mono repository with independent packages versionning, it is **absolutely necessary** to scope package commits.
