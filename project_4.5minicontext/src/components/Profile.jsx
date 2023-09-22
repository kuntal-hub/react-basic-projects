import React, {useContext} from 'react'
import UserContext from '../Usercontext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.password}</div>
}

export default Profile