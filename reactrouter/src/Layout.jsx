
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// this we can do in app.jsx also
const Layout = () => {
  return (
   <>
   {/* header and foooter will be same outlet changes in all the way  */}
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
