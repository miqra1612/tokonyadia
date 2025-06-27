import { faEye, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../../firebase/firebaseConfig';

function Login ({account, onSetPage}){
    const promoStyle = { background: "#dff9fb" };

    const inputStyle = {
            width: "180px",
            background: "#686de0",
            color: "#dff9fb"
    };

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    })

    const setUsername = (e)=>{
        setLoginInfo(prev => ({...prev, email:e.target.value}));
    }

    const setPassword = (e) =>{
        setLoginInfo(prev => ({...prev, password:e.target.value}));
    }

    // function loginAccount(){
    //     const identifier = account.find((p)=>(p.username === loginInfo.email || p.email === loginInfo.email ));
        
    //     const idPassMatch = identifier.password === loginInfo.password;
       
    //     if(idPassMatch){
    //         alert("log in success");
    //         onSetPage("home");
    //     }
    //     else{
    //         alert("Wrong username or password, check again! ");
    //         setLoginInfo({
    //             email:"",
    //             password:""
    //         });
    //     }
        
    // }

    const [showPassword,setShowPassword] = useState(false);
    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const signInCred = await signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password);
            const userDoc = await getDoc(doc(db, "users", signInCred.user.uid));

            if(userDoc.exists()){
                const userdata = userDoc.data();
                alert("Wellcome " + userdata.role + " " + userdata.name);
                onSetPage("home");
            }
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <div style={promoStyle}>
         <div className="container w-50">
            <br /><br />
            
            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Email</span>
                <input type="text" aria-label="First name" className="form-control" value={loginInfo.email} onChange={setUsername}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Password</span>
                <input type={showPassword? "text":"password"} aria-label="First name" className="form-control" value={loginInfo.password} onChange={setPassword}/>
                 <button className="btn btn-outline-secondary" type="button" id="passwordShow" onClick={togglePassword}><FontAwesomeIcon icon={faEye}/></button>           
            </div>
            <br />

            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="loginAccBtn" onClick={handleSubmit}>Sign In</button>
                
            </div>

        <br /><br />
        </div>
    </div>
  )
}

export default Login