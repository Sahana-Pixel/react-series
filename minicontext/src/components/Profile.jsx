// data is accessed
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    // we want data so we use user
    // if we want add data then setUser
    const {user}=useContext(UserContext)
    if (!user) {
        return (
            <div>
                please login
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome {user.username}</h1>
            </div>
        )
    }

}

export default Profile
