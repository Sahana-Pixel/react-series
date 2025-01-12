import { StrictMode } from 'react'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/user/user.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'

// router will pack there method which has array 

// will put object 
// path which / 
// i want header and footer same there is change in conent 
// const router = createBrowserRouter([
//    {
//     // what we are rendering that element we have to say 
//     path: '/',
//     element: <Layout/>,
//     // more we want to add so children we are adding 
//     children: [
//       { path: '',
//         element: <Home/> },
//       { path: 'about',
//         element: <About/> },
//         { path: 'contact',
//           element: <Contact/> },
      
//     ]
//    }
// ])
// this big complex 

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      // method from where to call
      loader={githubLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  ) )
// )loader data fetch we can directly call for here brefore useefect it fetch all api call can be done here optimization

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* as we used router this take prop */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
