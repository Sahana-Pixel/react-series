
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'



const MyApp = () => {
  return (
    <div>
      Meow | meow
    </div>
  )
}

// before one is converted to thhis syntax
// this is object
// const reactElement={
//   // wt type of eleemnt is 
//   type: 'a',
//   // props is object which has properties
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google '
// }


// react has predifined properties
// craete element mthod : which take object 
//  tag name, setattribut {}, direct text
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google '
)

const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google </a>
)
createRoot(document.getElementById('root')).
render(
 
    <App/>
)

// everey rect uses bundler:beihinde scene it works
// 