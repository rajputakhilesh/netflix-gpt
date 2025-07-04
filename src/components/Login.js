import React, {useState, useRef} from 'react'
import Header from './Header';
import { validate } from '../utils/validate';
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState();
const navigate = useNavigate();

const fullName = useRef(null)
 const email = useRef(null);
 const password = useRef(null)

  const handleSubmit = (e)=> {
    e.preventDefault()
    const validationMesaage = validate(email.current.value, password.current.value);
    setErrorMessage(validationMesaage)
    if (validationMesaage) return;

    if(!isSignInForm){
      // logic for signup form
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse")
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
    } else {
  //  Sign in form Authentication
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

    }

  }

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    };

  return (
    <div>
     <Header />
     <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg" alt="background"/>
     </div>
     <form className="absolute p-12 bg-black w-4/12 mx-auto left-0 right-0 my-36 text-white bg-opacity-80">
        <h1 className="text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
            <input ref={fullName} type="text" placeholder="Full Name" className="p-3 my-3 w-full rounded-lg bg-gray-600"/>
        )}
        <input ref={email} type="text" placeholder='Emal Address' className="p-3 my-3 w-full rounded-lg bg-gray-600" />
        <input ref={password} type="password" placeholder="password" className="p-3 my-3 w-full rounded-lg bg-gray-600" />
        <p className="text-red-600 px-4  text-lg-500">{errorMessage}</p>
        <button className="p-3 my-6 w-full bg-red-700 rounded-lg" onClick={handleSubmit}>{isSignInForm ? "Sign in" : "Sign Up"}</button>
        <p onClick={toggleSignIn} className="cursor-pointer">{isSignInForm ? "New to Netflix?Sign up now." : "already a user?Sign In"}</p>
     </form>
    </div>
  )
}

export default Login
