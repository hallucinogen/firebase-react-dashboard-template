# Starter Kit for Building Dashboard with Firebase

This is inspired by (and forked from) [@cpojer](https://github.com/cpojer)'s [fastest frontend tooling in 2022](https://cpojer.net/posts/fastest-frontend-tooling-in-2022). You can check his excellent work [here](https://github.com/cpojer/vite-ts-react-tailwind-template).

This template is an opinionated React starter pack to build any dashboard using Firebase. You get the following developer experience:

- [React](https://reactjs.org/) as the library.
- [Firebase](https://firebase.google.com/) as the backend.
- [TypeScript](https://www.typescriptlang.org) as the default programming language.
- [Ant Design](https://ant.design/) as the UI design system.
- [Tailwind](https://tailwindcss.com/) as the CSS framework.
- [prettier](https://prettier.io/) and [ESLint](https://eslint.org/) as code formatter and linter.
- [Github Action](https://github.com/features/actions) for CI/CD to Firebase.
- [Vite](https://vitejs.dev/) as development environment.
- [Gitpod](https://gitpod.io/) as remote development environment so you can code anywhere (including using iPad or any tablet) _(Optional)_.
- [pnpm](https://pnpm.io/ja/) as the package manager _(Optional)_.

_The UI_

<img width="1792" alt="Screen Shot 2022-10-20 at 5 00 06 PM" src="https://user-images.githubusercontent.com/681920/196919586-5f069e72-af5b-4988-ac55-bbe0f82d4ab2.png">


_Developing from Gitpod (Optional)_

<img width="1792" alt="Screen Shot 2022-10-16 at 6 29 24 PM" src="https://user-images.githubusercontent.com/681920/196032863-25b964c9-a2c4-499a-a343-e5334ad9f292.png">

## Setup

- Press the "Use this template" on the top of this repository's GitHub page.
- Put your Firebase config in `src/firebase.ts`
- Run `pnpm install` (or `npm install` if you don't use `npm`).
- `pnpm dev` for development.
- Use `pnpm test` to run tests.
- `pnpm build` for production builds.
