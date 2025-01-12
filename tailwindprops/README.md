main work will be done by dependies in package.json
whiel dvdependeies come in use during development

installed tailwind 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
this generates new files tailwind .config.js

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  it is searching content in index and source also
  this method is update to serch content 

  @tailwind base;
@tailwind components;
@tailwind utilities;
this are added at top of index.css

  we are testing tailwind with the classname like bg-green
  used component from devui
  
props - reusable properties
when values are passed it get changes
i  will new component that return card