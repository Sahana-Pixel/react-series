import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // direct value light
  const [themeMode, setThemeMode] = useState("light")

  // for that will define method here light and darktheme automatically it goes to that method
  const lightTheme =()=>{
    setThemeMode("light")
  }

  const darkTheme =()=>{
    setThemeMode("dark")
  }

  // how theme changes
  useEffect(()=>{
    // whatever it is remove light or dark
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  // now return the app component with theme provider and theme toggle function
  return (
    // now will wrap the things here 
    // value ka acess do
    // we have now method ligthheme and darkTheme wt this method do i donno
   <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    {/* now we also need to give values who has whta access where will we bring that */}
   
  <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* theme button */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>
  )
}

export default App
