import React, { useState } from 'react';
import './Login.css';
import login from '../../../images/login.png';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from './firebase.Config';


const Login = () => {
    const [glogin,setGlogin]=useState({})
    const signInwithGoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
    return (
        <div>
          <div className="row d-flex align-items-center">
              <div className="col-md-6">
                  <button onClick={signInwithGoogle}>login with google</button>
              </div>
              <div className="col-md-6 loginBg">
                  <img style={{height:'100vh'}} src={login} alt="" />
              </div>
          </div>
        </div>
    );
};

export default Login;