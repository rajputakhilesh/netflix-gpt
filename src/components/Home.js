import React, {useEffect} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {auth} from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'

const Home = () => {
const dispath = useDispatch();

  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    const email = user.email;
    const displayName = user.displayName;
    
    dispath(addUser({uid:uid, email: email, displayName: displayName}))
    // ...
  } else {
    // User is signed out
    // ...
    dispath(removeUser())
  }
});

  },[])

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Home
