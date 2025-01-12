import { useParams } from "react-router-dom"


// method 
const User = () => {
    const {userid}=useParams()
  return (
    <div>
        {/* whaterve we get in url we get access to it */}
      User:{userid}
    </div>
  )
}

export default User
