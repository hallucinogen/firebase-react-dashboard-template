# Starter Kit for Building Dashboard with Firebase

This is inspired by (and forked from) [@cpojer](https://github.com/cpojer)'s [fastest frontend tooling in 2022](https://cpojer.net/posts/fastest-frontend-tooling-in-2022). You can check his excellent work [here](https://github.com/cpojer/vite-ts-react-tailwind-template).

Try the demo [here](https://ads-platform-c8149.web.app/)

<img width="1792" alt="Screen Shot 2022-10-20 at 5 00 06 PM" src="https://user-images.githubusercontent.com/681920/196919586-5f069e72-af5b-4988-ac55-bbe0f82d4ab2.png">

This template is an opinionated React starter pack to build any dashboard using Firebase. You get the following developer experience:

- [React](https://reactjs.org/) as the frontend library. I choose React over Svelte, Vue or Angular because as a hiring manager it's easier to hire engineers who're familiar (and export) with React than any others.
- [Firebase](https://firebase.google.com/) as the backend. Firebase is good because it's easy to start, have good enough features to keep using it for a while, and very generous free plan.
- [TypeScript](https://www.typescriptlang.org) as the default programming language. I've had enough `undefined is not an object` error in my career.
- [Ant Design](https://ant.design/) as the UI design system. Easy to integrate with any CSS framework and have enterprise-level features.
- [Tailwind](https://tailwindcss.com/) as the CSS framework.
- [prettier](https://prettier.io/) and [ESLint](https://eslint.org/) as code formatter and linter. The benefit of consistent pretty code across multiple engineers working on same code base will compound over time.
- [Github Action](https://github.com/features/actions) for CI/CD to Firebase. Simple and very easy to setup CI/CD.
- [Vite](https://vitejs.dev/) as development environment. Fastest development environment per 2022.
- [pnpm](https://pnpm.io/ja/) as the package manager _(Optional)_.
- [Gitpod](https://gitpod.io/) as remote development environment so you can code anywhere (including using iPad or any tablet) _(Optional)_.

<img width="1792" alt="Screen Shot 2022-10-16 at 6 29 24 PM" src="https://user-images.githubusercontent.com/681920/196032863-25b964c9-a2c4-499a-a343-e5334ad9f292.png">

## Setup

- Press the `Use this template` on the top of this repository's GitHub page.
- Put your Firebase config in `src/firebase.ts`
- Run `pnpm install` (or `npm install` if you don't use `pnpm`).
- `pnpm dev` for development (it opens port 3000).
- `pnpm test` to run lints and tests.
- `firebase deploy` to build, package and deploy your web app to Firebase.
