// as its provided to all 
import React from 'react'
import UserContext from './UserContext'

// children  as same as div jus like outlet
// jo it is araha wahi pass karo
const UserContextProvider = ({children}) => {
    // we can use React.useState also
    const [user,setUser]= React.useState(null)

//  childeren will be wrapped and rendered
    return(
        // what will it access value or prop , object is passed 
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
   
    
 )
}

export default UserContextProvider
