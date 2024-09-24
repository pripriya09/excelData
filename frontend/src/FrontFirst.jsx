import React from 'react'
import SignInPage from './SignInPage';
import SignUp from './SignUp';

function FrontFirst() {
  return (
   <>
   <div className="mainDividePage">
    <div className="signIn">
        <SignInPage/>
    </div>
    <div className="singUp">
        <SignUp/>
    </div>
   </div>
   
   </>
  )
}

export default FrontFirst