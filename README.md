# d12n.eu
[![Netlify Status](https://api.netlify.com/api/v1/badges/1338164e-0721-4630-a175-64f6404f9016/deploy-status)](https://app.netlify.com/sites/d12n/deploys)\
d12n.eu is a work in progress Jamstack website that I'm currently rebuilding with TypeScript and the React Framework Next.js. It runs on netlify.com and it is connected to the content cloud @ sanity.io. Testing takes place on GitHub Codespaces.
The website aims to deliver content in the field of political science, with a primary focus on the European Union and Civic Education.
## components
*node.js* - a cross-platform, open-source JavaScript runtime environment\
*react.js* - a free and open-source front-end JavaScript library\
*next.js* - an open-source web development framework for react.js\
*tailwindcss.com* - an open-source web-design library using the cascading style sheets language\
*next-intl* - an internationalisation (i18n) library for next.js\
*TypeScript* - a free and open-source language that adds static typing to JavaScript\
*sanity.io* - a headless content management system
## development environment
*github.com* - a development platform with distributed version control\
*github codespaces* - a fully configured, secure cloud development environment native to github\
*netlify.com* - a development platform with build, deploy and serverless backend services for web applications
## customisations
- the github codespace uses the *javascript-node* devcontainer as the development environment\
- for sanity.io, a *Language* field was added to the blog schema
## project folder structure
*\public* - pictures and similar files for public access\
*\src* - application source code\
*\next-config.mjs* - configuration of the next-intl plugin\
*\package.json* - node.js packages needed for production / development\
*\postcss.config.js* - configuration of the tailwind.css plugin\
*\sanity.cli.ts* - configuration for the sanity-cli plugin\
*\sanity.config.ts* - configuration for the sanity studio plugin\
*\tailwind.config.js* - configuration for the tailiwind.css plugin\
*\tsconfig.json* - configuration for TypeScript
## application folder structure
*\src\app\de* - page configuration for the german locale\
*\src\app\globals.css* - configuration for the tailwind css modules\
*\src\components\Card.tsx* - short version of an article on the overview page\ 
*\src\sanity* - sanity application code for the sanity plugin
## Sanity at work
*\src\sanity\lib\queries.ts* - GROQ syntax to query page text from the sanity cloud\
*\src\sanity\lib\sanityFetch.ts* - async Funtions to execute the GROQ queries and pull data from the sanity cloud\
*\src\sanity\schemaTypes* - data structure definitions for the sanity content editor\
*\src\sanity\schema.ts* - activation of data structures for the sanity content editor
