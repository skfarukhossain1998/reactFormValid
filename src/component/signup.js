import '../App.css';
import React, { useState } from 'react';
import sign from '../images/sign.png'

function Signup() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [Success,setSuccess]=useState('');
const [error,setError]=useState('');

const handleSignup=(e)=>{

  e.preventDefault();
 
  if(!name || !email || !password || !confirmPassword){
    setSuccess("");
    setError("Error : All the fields are mandatory");
    return;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    setError('Please Enter A Valid Email Address ');
    return;
  }
 
  if(password!==confirmPassword)
  {
    setSuccess("");
    setError("Error: Please Make sure your passwords and confirm passwords match!");
    return;
  }
  else{
    setError("");
    setSuccess("Successfully Created!");
    setTimeout(()=>{
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuccess("");
    },2000);
    
    return;
  }


}


const handleButtonClickGl = () => {
  window.location.href = 'https://accounts.google.com/AccountChooser';
};

const handleButtonClickFb = () => {
  window.location.href = 'https://www.facebook.com/login.php';
};

  return (
<div className="App">
    <div className="bothPart ">
            <div className="left ">
            <img src={sign} alt=""/>

            </div>

            <div className="right ">
                <div className="container ">
                <div className="rightPart">
                <h1 className="heading">Create Account</h1>
                <div className="link">
                <button onClick={handleButtonClickGl} className="btnGoogle commonBtn">Signup With Google</button>
                <button onClick={handleButtonClickFb} className="btnFB commonBtn">Signup With Facebook</button>
                </div>
                
                <h2>-OR-</h2>

                <div className="form-contain">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Email" 
                                    
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                {/* <div id="msg" className="form-status"></div> */}
                                <button onClick={handleSignup} className="btn">Create Account</button>
                                <div className="message">
                                 {error && <div className="error">{error}</div>}
                                {Success && <div className="success">{Success}</div>}
                                </div>
                                {/* <button id="signup-btn" class="btn" type="submit">Signup</button> */}
                                </div> {/* form conatin */}
                </div>
                </div>

                
            </div>{/* right part */}
    </div>{/* Both Part */}
</div> /* App Part */
  );
}

export default Signup;
