import { faEye, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Login ({account, onSetPage}){
    const promoStyle = { background: "#dff9fb" };

    const inputStyle = {
            width: "180px",
            background: "#686de0",
            color: "#dff9fb"
    };

    const [loginInfo, setLoginInfo] = useState({
        usernameOrEmail:"",
        password:"",
    })

    const setUsername = (e)=>{
        setLoginInfo(prev => ({...prev, usernameOrEmail:e.target.value}));
    }

    const setPassword = (e) =>{
        setLoginInfo(prev => ({...prev, password:e.target.value}));
    }

    function loginAccount(){
        const identifier = account.find((p)=>(p.username === loginInfo.usernameOrEmail || p.email === loginInfo.usernameOrEmail ));
        
        const idPassMatch = identifier.password === loginInfo.password;
       
        if(idPassMatch){
            alert("log in success");
            onSetPage("home");
        }
        else{
            alert("Wrong username or password, check again! ");
            setLoginInfo({
                usernameOrEmail:"",
                password:""
            });
        }
        
    }

    const [showPassword,setShowPassword] = useState(false);
    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }

  return (
    <div style={promoStyle}>
         <div className="container w-50">
            <br /><br />
            
            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Username or Email</span>
                <input type="text" aria-label="First name" className="form-control" value={loginInfo.usernameOrEmail} onChange={setUsername}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Password</span>
                <input type={showPassword? "text":"password"} aria-label="First name" className="form-control" value={loginInfo.password} onChange={setPassword}/>
                 <button className="btn btn-outline-secondary" type="button" id="passwordShow" onClick={togglePassword}><FontAwesomeIcon icon={faEye}/></button>           
            </div>
            <br />

            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="loginAccBtn" onClick={loginAccount}>Sign In</button>
                
            </div>

        <br /><br />
        </div>
    </div>
  )
}

export default Login