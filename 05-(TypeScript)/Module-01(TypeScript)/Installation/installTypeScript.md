# TypeScript Installation

TypeScript can be installed through three installation routes, these are following

**1. NPM module**
**2. NuGet package**
**3. Visual studio extension**

Let's go with NPM module.

## **NPM Module**

Having TypeScript set up on a per-project basis let us have many projects with many different version of TypeScript, this keep each project working consistently.

```bash
$ npm install typescript --save-dev
```

_npm, yarn, pnpm_, all of these dependency managers support lockfiles, ensuring that everyone on our team is using the same version of the language.

```bash
# Run the TypeScript compiler using the command

$ npx tsc
```

## **Install TypeScript Globally**

It means we can use _tsc_ command anywhere in our terminal.

```bash
$ npm install -g typescript
```
