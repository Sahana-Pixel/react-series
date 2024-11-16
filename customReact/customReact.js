

// custom renderfunction
function customRender(reactElement,container){
    // // reactElement through craete element .type
    // const domElement =document.createElement(reactElement.type)
    // // injecting innner html element
    // domElement.innerHTML=reactElement.children
    // // adding attributes to dom element
    // // href value is set reactEleemtn.props.href
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // // append child to parent
    // container.appendChild(domElement)

     // will write loop based code
     // for loop for children
     const domElement =document.createElement(reactElement.type)
    // injecting innner html element
    domElement.innerHTML=reactElement.children
     for(const prop in reactElement.props){
        // if there is chikder inside props
        if(prop!=='children'){
            domElement.setAttribute(prop,reactElement.props[prop])
            // prop attribute set 
        }
     }
    // append domElement to parent
    container.appendChild(domElement)

}


// how react sees html
// react makes element has tress 
// custom react
const reactElement={
    // wt type of eleemnt is 
    type: 'a',
    // props is object which has properties
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google '
}
// this we get through react

// i want o render a tag
const mainContainer= document.querySelector('#root')

// method that render
// reactElement is added to root element
// kya inject karu, kaha pe inject karu
customRender(reactElement,mainContainer)