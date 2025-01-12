import { useContext } from "react";
import { createContext } from "react";


// we can put default value
// intial in what we can feed
export const ThemeContext=createContext({
//    default ho
// whenever the context is called this they will get
// we pass variable as well method
    themeMode:'light',
    // method
    darkTheme:() =>{},
    lightTheme:()=>{},

})

// we can also directly themeProvider here 
export const ThemeProvider=ThemeContext.Provider;

// we can also make custom hook here anyway its a function
 export default function useTheme(){
    return useContext(ThemeContext)
 }
//  inside themecontext it gives directly we dont have to make different file