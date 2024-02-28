import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


function Login(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    let handleSubmit = (e) => {
      e.preventDefault()
      setUser({userName, password})
    }


  return (
    <>
     <div className='flex flex-col items-center'>
        <h2>Login</h2>
        <input type="text" 
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        placeholder='UserName' 
        />
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password' 
         />
     </div>
        <button onSubmit={handleSubmit}>Submit</button> <br />
    </>
  )
}

export default Login