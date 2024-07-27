# React and Redux Workshop

Workshop Project

## How to use this Project

-   [ ] Checkout the project locally
-   [ ] Create new branch
-   [ ] Branch name should end with your name e.g. react-redux-workshop-firstname
-   [ ] Push your change after each workshop session to continue next time
-   [ ] I Recommended to add your notes with session date in this readme file to know what you did last time
-   [ ] in branch folder session you will find branches for each session e.g. react-redux-workshop-24-04-2024

## Project Techstack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,redux,ts,vite,jest,html,styledcomponents" />
  </a>
</p>

| Library    | version |
| ---------- | :-----: |
| React      | 18.2.0  |
| Typescript |  5.2.5  |
| Redux RTK  |  2.0.1  |
| Vite       |  5.2.0  |
| eslint     | 8.57.0  |
| prettier   |  3.0.3  |

## Scripts

running any script from package.json should start with: `npm run xyz`
or just use IDE run feature direct from `package.json` file

```
example:
npm run dev
```

| script   |                                      task                                      |
| -------- | :----------------------------------------------------------------------------: |
| dev      |                            start local development                             |
| build    |                           build production with Vite                           |
| lint:fix | will check you code with ESlint and show you report if there are any conflicts |
| test     |               run all test (out of the scope for this workshop)                |

## Eslint

To have better code quality we will use `ESlint` and `Prettier` library in this project, you don't need to
configure anything in ESLint for this workshop.

#### Configure IDE to auto Lint your code after save

-   go to Intellij setting
-   search for eslint
-   choose the option from Code Quality code
-   check the option: `Automatic ESlint configuration`
-   also check the last check: `Run eslint --fix on save`
