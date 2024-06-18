import React from 'react'
import { useState,useRef } from 'react';
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";



const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();

  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    //Validate the form data

    console.log(email.current.value);
    console.log(password.current.value);

   const message= checkValidData(email.current.value,password.current.value)
   setErrorMessage(message);
   if(message) return;
   
   // SignIn / SignUp

    if(!isSignInForm){
      //SignUp logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
    }
    else{
     //SignIn Logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    navigate('/browse');
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/148499007?s=400&u=b4dd3bbb4e9dbb47c594f29dd5dc8a5154c18ff7&v=4"
    }).then(() => {
      // Profile updated!
      navigate("/browse");
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
      // ...
    });

    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='bcg_image'
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder='Full Name'
        className='p-2 my-3 w-full bg-gray-700'/>)}
        <input 
        ref={email} 
        type="text" 
        placeholder='Email or Phone Number'
        className='p-2 my-3 w-full bg-gray-700'/>
         <input 
         ref={password} type="password" placeholder='Password'
        className='p-2 my-3 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button onClick={handleButtonClick}
        className='p-3 my-5 bg-red-700 w-full rounded-lg'>
      {isSignInForm ?"Sign In":"Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? Sign Up now.":
          "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  )
}

export default Login