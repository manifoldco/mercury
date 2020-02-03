# @manifoldco/mercury

This project was created with [Diez](https://diez.org).

## What's in the box

The `design-language` directory contains a Diez design language project. It is the living source of truth for your design language.

The `example-codebases` directory contains example projects connected to your Diez project. Note that the example apps are only present for demonstration purposes, and can be safely removed.

```
.
├── design-language
|   └── src
|       ├── index.ts
|       └── DesignLanguage.ts
└── example-codebases
    ├── android
    ├── ios
    └── web
```

## Quickstart

To quickly experience how Diez works, simply run `yarn demo` or `npm run demo` from `design-language`. This command will use Diez to compile a JavaScript SDK for your design language and link it to the example web project located in `codebases/web`, then start the example web project in your browser.

Check out our [Getting Started guide](https://diez.org/getting-started/) to learn more.

## ♻️ Updating

From the `design-language` folder, run `yarn update`. You’ll need to authenticate with Figma.

⚠️ **Note**: when updating, be mindful of missing assets. Often times, Figma will simply time-out, and fail to download. Assume that most missing assets are from rate-limiting, not that they were removed from the Figma file (esp. icons).

## 🚀 Deploying

Currently, deploying happens manually. From the `design-language` folder, run `yarn publish`. You’ll need to be signed into npm.

⚠️ **Note**: deploying won’t update the tokens! You’ll need to run `yarn update` to pull the latest values.
