import React, { useState } from 'react'

function SignInPage() {
  const [name,setName]= useState('')
 const [username,setUsername] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [CPassword,setCPassword] = useState("")
  return (
 <>
 <form>
  <label> Name
    <input type="text" name='name' placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} />
  </label><br/>
  <label>Username
    <input type="text" name='Username' placeholder='Enter your Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
  </label><br/>
  <label>Email
    <input type="text" name='email' placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  </label><br/>
  <label> Password
    <input type="text" name='password' placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
  </label><br/>
  <label> Confirm Password
    <input type="text" name='Confirm password' placeholder='Enter your confirm password' value={CPassword} onChange={(e)=>{setCPassword(e.target.value)}} />
  </label><br/>
  <button>open singUp page</button>

 </form>

 </>
  )
}

export default SignInPage