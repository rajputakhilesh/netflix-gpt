import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    };

  return (
    <div>
     <Header />
     <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg" alt="background"/>
     </div>
     <form className="absolute p-12 bg-black w-3/12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80">
        <h1 className="text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input type="text" placeholder="Full Name" className="p-3 my-3 w-full rounded-lg bg-gray-600"/>
        )}
        <input type="text" placeholder='Emal Address' className="p-3 my-3 w-full rounded-lg bg-gray-600" />
        <input type="password" placeholder="password" className="p-3 my-3 w-full rounded-lg bg-gray-600" />
        <button className="p-3 my-6 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign in" : "Sign Up"}</button>
        <p onClick={toggleSignIn} className="cursor-pointer">{isSignInForm ? "New to Netflix?Sign up now." : "already a user?Sign In"}</p>
     </form>
    </div>
  )
}

export default Login
