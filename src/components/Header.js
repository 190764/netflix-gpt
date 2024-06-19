import React from 'react'
import { signOut } from "firebase/auth";
import{auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleLanguageChange=(e)=>{
       dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
       <img 
       className='w-44'
       src={LOGO}
       alt='logo'/>
       

       <div className='flex p-2'>
        <select className='p-2 m-2 text-white bg-gray-900'
        onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg '>GPT Search</button>
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