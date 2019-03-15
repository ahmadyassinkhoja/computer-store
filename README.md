# Computer Store Project Front-end

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7bb7745e2d2745d1a4cbd974b921fe19)](https://www.codacy.com/app/ahmadyassinkhoja/computer-store?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ahmadyassinkhoja/computer-store&amp;utm_campaign=Badge_Grade)

## Getting Started

> This is a living document, so please check back occasionally for changes.

### Repository Conventions

- Remote repository is hosted on GitHub
- `eslint` standards will be enforced
- Use `yarn` not `npm`

### Visual Studio Code

It would be best to use Visual Studio code so we can all use the same plugins. However, if you feel more comfortable using a different editor/IDE please do so.

> Visual Studio Code has great Git integration. If you use something else you may need to learn various Git commands - good luck!

#### Recommended Plugins

- GitLens // for github inetrgration
- Eslint // for Javascript linting
- Toggle Format on Save // for auto correct
- Babal ES6/ES7 // for writing es6 in js (get integrates with nodemon or node)
- npm Intellisense // autocompletes npm modules in import statements.
- Rainbow Brackets // for nice color for brackets, etc..
- Better Comment // for upgrading comments to Alerts, Queries, TODOs, Highlights, Strikethrough, etc...

## Installing

These steps will allow for local development of the _application_ on your machine.

1.  Make sure you already have `yarn`, `npm` and `node` (version 10 or greater) installed
2.  Clone this repository
3.  Run `yarn install` from the project root
4.  Connect Your Phone with the laptop for `USB Debugging`
5.  Run `npm run android` to start the server on your phone
6.  In your browser you should access the client application

## Commands

List of commands found in `package.json`. Most of the actions you need to perform via the command line will be available via these commands. These all assume you are in the project root.

`npm run android` - start development server on your `android` phone and watch for changes

`npm run ios` - start development server on your `ios` phone and watch for changes

`yarn install` - To Install all the dependencies

## Project Structure

This structure is important because it will alleviate issues when we attempt to merge our code. We should not have to create any new folders at this point. If the need arises please communicate the need to the project manager.

Of course, the project structure will change as the project grows. But we will make any structural change decisions as a team when needed.

```
├── .expo
├── assets
│   ├── icon.png
│   ├── splash.png
│   └── images
│       ├── acer.jpg
|       ├── asus.jpg
|       └── lenovo.jpg
│
├── components
│   ├── icons
│   │   └── CartIcon.js
│   ├── Cart.js
│   ├── CartProduct.js
│   ├── EmptyCartCard.js
│   ├── Product.js
│   └── Products.js
│
├── node_modules
├── .eslintrc.js
├── .gitignore
├── .watchmanconfig
├── App.js
├── app.json
├── babel.config.js
├── devices.js
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```
