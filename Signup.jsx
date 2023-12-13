import React from 'react';
import './Signup.css';

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Signup = ({onToggleForm}) =>{
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='Name' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email Id' required/>
                    <MdAttachEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
    
                
                
                <button type="sumbit">Sign Up</button>

                <div className="register-link">
                    <p>Already have an account?
                    <a type="button" onClick={onToggleForm}>  Login</a>
                        
                    </p>
                </div>
                 
         </form>
        </div>
    );
};
export default Signup;