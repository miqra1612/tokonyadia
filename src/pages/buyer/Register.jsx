import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { auth, db } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function  Register ({account, onRegisterAccount, onSetPage, onSetLoading}){
    const inputStyle = {
            width: "180px",
            background: "#686de0",
            color: "#dff9fb"
      };
    
    const promoStyle = { background: "#dff9fb" };
    
    const [accountInfo, setAccountInfo] = useState({
        firstName:"",
        lastName:"",
        buyersName:"",
        email:"",
        username:"",
        password:"",
        phoneNumber:0,
        address:"",
        city:"",
        province:"",
        country:"",
        postalCode:0,
        completeAddress:"",
        accountType:"buyer"

    });

    const setFirstName = (e)=>{
        setAccountInfo(prev => ({...prev,firstName:e.target.value}));
    }

     const setLastName = (e)=>{
        setAccountInfo(prev => ({...prev,lastName:e.target.value}));
    }

     const setEmail = (e)=>{
        setAccountInfo(prev => ({...prev,email:e.target.value}));
    }

     const setUsername = (e)=>{
        setAccountInfo(prev => ({...prev,username:e.target.value}));
    }

     const setPassword = (e)=>{
        setAccountInfo(prev => ({...prev,password:e.target.value}));
    }

     const setPhone = (e)=>{
        setAccountInfo(prev => ({...prev,phoneNumber: e.target.value}));
    }

     const setAddress = (e)=>{
        setAccountInfo(prev => ({...prev,address:e.target.value}));
    }

     const setCity = (e)=>{
        setAccountInfo(prev => ({...prev,city:e.target.value}));
    }

     const setProvince = (e)=>{
        setAccountInfo(prev => ({...prev,province:e.target.value}));
    }

     const setCountry = (e)=>{
        setAccountInfo(prev => ({...prev,country:e.target.value}));
    }

     const setPosCode = (e)=>{
        setAccountInfo(prev => ({...prev,postalCode:e.target.value}));
    }

    const setAccountType = (e)=>{
        setAccountInfo(prev => ({...prev,accountType:e.target.value}));
    }

    const [confirmPassword, setConfirm] = useState(""); 

    // function AddNewAccount(){
    //     //This Funtion is for testing only and will be replace with ReaclAccount

    //     accountInfo.buyersName = accountInfo.firstName + " " + accountInfo.lastName;
    //     accountInfo.completeAddress = accountInfo.address + ", " + accountInfo.city + ", " + accountInfo.province + ", " + accountInfo.country + ", " + accountInfo.postalCode;

    //     onRegisterAccount(accountInfo);
    //     //alert("email: " + account[0].email + ", " + "username: " + account[0].username);

    //     if(accountInfo.password === confirmPassword){
    //         alert("Success Register \n" + "Name: " + accountInfo.buyersName + "\n" + "Username: " + accountInfo.username + "\n" + "Address: " + accountInfo.completeAddress);
    //         onSetPage("login");
    //     }
    //     else{
    //         alert("Password and confirm password not match, check again");
    //     }
        
    // }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirm = () => {
        setShowConfirm(!showConfirm);
    }

    const createRealAccount = async (e) => {
        
        e.preventDefault();
        onSetLoading(true);

        accountInfo.buyersName = accountInfo.firstName + " " + accountInfo.lastName;
        accountInfo.completeAddress = accountInfo.address + ", " + accountInfo.city + ", " + accountInfo.province + ", " + accountInfo.country + ", " + accountInfo.postalCode;

        
        if(accountInfo.password === confirmPassword){

            try {
                const userCred = await createUserWithEmailAndPassword(auth, accountInfo.email, accountInfo.password );
                await setDoc(doc(db, "users", userCred.user.uid),{
                    name: accountInfo.buyersName,
                    email: accountInfo.email,
                    address: accountInfo.completeAddress,
                    phoneNumber: accountInfo.phoneNumber,
                    role: accountInfo.accountType,
                    uid: userCred.user.uid

                });

                onSetLoading(false);
                alert("Success Register \n" + "Name: " + accountInfo.buyersName + "\n" + "Username: " + accountInfo.username + "\n" + "Address: " + accountInfo.completeAddress);
                onSetPage("login");

            } catch (error) {
                alert(error.message);
            }
            
        }
        else{
            alert("Password and confirm password not match, check again");
        }

        
    }

  return (
    <div style={promoStyle}>
        <div className="container w-50">
            <br /><br />
            <div class="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>First name</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setFirstName}/>
                        
            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Last name</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setLastName}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Email</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setEmail}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Username</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setUsername}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <h6>Password use 8 characters, combination of capital, letter, and number.</h6>
                <span className="input-group-text" style={inputStyle}>Password</span>
                <input type={showPassword? "text":"password"} aria-label="First name" className="form-control" onChange={setPassword}/>
                <button className="btn btn-outline-secondary" type="button" id="passwordShow" onClick={togglePassword}><FontAwesomeIcon icon={faEye}/></button>
            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Confirm Password</span>
                <input type={showConfirm? "text":"password"} aria-label="First name" className="form-control" onChange={(e)=>{setConfirm(e.target.value)}}/>
                <button className="btn btn-outline-secondary" type="button" id="confirmShow" onClick={toggleConfirm}><FontAwesomeIcon icon={faEye}/></button>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Phone Number</span>
                <input type="number" aria-label="First name" className="form-control" onChange={setPhone}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Delivery Address</span>
                <textarea className="form-control" aria-label="With textarea" onChange={setAddress}></textarea>
            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>City</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setCity}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Province</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setProvince}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Country</span>
                <input type="text" aria-label="First name" className="form-control" onChange={setCountry}/>

            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Postal Code</span>
                <input type="number" aria-label="First name" className="form-control" onChange={setPosCode}/>
                            
            </div>
            <br />

            <div className="input-group mb-3">
                <span className="input-group-text" style={inputStyle}>Account Type</span>
                <select name="role" aria-label="Account type" className="form-control" onChange={setAccountType}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>    
                </select>
                            
            </div>
            <br />

            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="registerBtn" onClick={createRealAccount}>Register New Account</button>
                
            </div>

        <br /><br />
        </div>
    </div>
  )
}

export default Register