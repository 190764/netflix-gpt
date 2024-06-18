import React from 'react'
import { signOut } from "firebase/auth";
import{auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
       <img 
       className='w-44'
       src={LOGO}
       alt='logo'/>

       <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        src="https://img.icons8.com/?size=512w&id=TSNPQ4jsav1-&format=png"
        alt='usericon'
        />
        <button onClick={handleSignOut} className='font-bold px-2 text-white'>SignOut</button>

       </div>
    </div>
   
  )
}

export default Header