// it has pure js

import React from 'react'
// to create context and this is method
const UserContext=React.createContext()
// will get this context 
export default UserContext
// every context are provider this is also provider

// if we wrap that like this it become provider
// <UserContext>
// <Login/>
// <UserContext/>

// all those component through UserContext its accessible