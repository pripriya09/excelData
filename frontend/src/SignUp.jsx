import React from 'react';


function SignUp() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")


  return (
  <form onSubmit={(e)=>{e.preventDefault()}}>
    <label>Username
    <input type="text" name='Username' placeholder='Enter your Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
  </label><br/>
  <label>Email
    <input type="text" name='email' placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  </label><br/>
  <button onClick={mainSubmit}>submit</button>
  </form>
  )
}

export default SignUp