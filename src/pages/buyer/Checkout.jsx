import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WindowScaler from '../../component/WindowScaler';


function Checkout({user, cart, onSetPage, onSetPaymentInfo}){
    
    const paymentStyle = { border:"2px solid orange", borderRadius:"5px" };
    const paymentLogoStyle = { height:"32px", width:"64px" };
    const boxItem = {background:"#c7ecee", borderRadius:"14px"}
    const imageStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}
    const imageMobileStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}

    const [bank, setBank] = useState("");
    const selectBank = (e)=>{
        console.log(e.target.value);
        setBank(e.target.value); 
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price,0);

    const serviceCharge = 20000;

    const tax = ( totalPrice * 10 )/ 100;

    const totalPayment = totalPrice + serviceCharge + tax;

    function generatePaymentInfo(){

        const timeLimit = new Date();
        timeLimit.setHours(timeLimit.getHours() + 2);
        const options = {
            day:'2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',   // Formats hour as two digits (e.g., 07, 19)
            minute: '2-digit', // Formats minute as two digits (e.g., 05, 56)
            second: '2-digit', // Formats second as two digits (e.g., 00, 05)
            hour12: false,     // Ensures 24-hour format
            timeZone: 'Asia/Jakarta' // Specifies the time zone
        };


        const min = 1000000000;
        const max = 9999999999;

        let paymentInfo = {
            bankName:bank,
            transferAccount:(Math.floor(Math.random() * (max-min+1)) + min).toString(),
            totalPayment:totalPayment,
            EndPaymentTime: timeLimit.toLocaleString('en-US', options)
        }

        console.log ("payment info: " + paymentInfo.bankName + ", " + paymentInfo.transferAccount + ", pay before: " + paymentInfo.EndPaymentTime);
        onSetPaymentInfo(paymentInfo);

    }
    

    function payItems (){
        

        alert("Payment Success \nPaid: Rp" + totalPayment.toLocaleString());
        onSetPage("home");
    }

    const screenWidth = WindowScaler();
    const isMobile = screenWidth < 1000;

    const mobileUI= (item)=>(
    
                       <div className="row row-cols-auto my-4" style={boxItem} key={"sh"+ item.productId}>
                            <div className="col my-auto">
                                <img className="" src={item.image} alt="..."  style={imageMobileStyle}/>
                            </div>
                            <div className="col text-start mx-auto my-auto">
                                <h6 className="mt-2" style={{width:"9rem"}}>{item.productName} x {item.quantity}</h6>
                                <h6 >Rp { ( item.price * item.quantity).toLocaleString()}</h6>
                                <br />
                               
                            </div>
                           
                            <br/> 
                        </div>
    );
    
    const wideUI = (item)=>(
                
                    <div className="row my-4" style={boxItem} key={"sh"+ item.productId}>
                            <div className="col-1 my-auto">
                                <img className="" src={item.image} alt="..."  style={imageStyle}/>
                            </div>
                            <div className="col justify-content-end mx-4 my-auto">
                                <h6>{item.productName} x {item.quantity}</h6>
                                
                                
                            </div>
                            <div className="col my-auto justify-content-end">
                                <h6 >Rp { ( item.price * item.quantity).toLocaleString()}</h6>
                            </div>
                            
                            <br/> 
                        </div> 
                
    );

  return (
    <div className="container text-start my-5">
        <h6>Buyer : {user.name}</h6>
        <br />
        
        <h6>Address</h6>
        <p>{user.address}</p>
        <br />

        <div>
        <h6>Items</h6>
            {cart.map((item)=> (
                isMobile? mobileUI(item): wideUI(item)
                ))
            }
        </div>
        <br />

        <h6>Delivery note</h6>
        <div className="input-group mb-3">
            <textarea className="form-control" aria-label="With textarea" placeholder="Put your note here..."></textarea>
        </div>
        <br />

        <h6>Select Payment</h6>
        <div>
            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="mandiri" value={"mandiri"} checked={bank==="mandiri"} onChange={selectBank}/>
                <label className="form-check-label mx-1" htmlFor="mandiri">
                    Mandiri
                </label>
                <img className="ms-4" src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayojakarta/images/post/articles/2021/06/07/34953/o_1b2plgvck1jng1mma1mv81apcf99a.jpg" alt="" style={paymentLogoStyle} />
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bri" value={"bri"} checked={bank==="bri"} onChange={selectBank }/>
                <label className="form-check-label mx-1" htmlFor="bri">
                   BRI
                </label>
                <img className="ms-5" src="https://tuwaga.id/wp-content/uploads/2025/01/FI004-_-BRI-9.png" alt="" style={paymentLogoStyle} />
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bni" value={"bni"} checked={bank==="bni"}  onChange={selectBank }/>
                <label className="form-check-label mx-1" htmlFor="bni">
                    BNI
                </label>
                <img className="ms-5" src="https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/6491bee525769f3d615b7ac3_bni_bank.webp" alt="" style={paymentLogoStyle}/>
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bca" value={"bca"} checked={bank==="bca"}  onChange={selectBank }/>
                <label className="form-check-label mx-1" htmlFor="bca">
                    BCA
                </label>
                <img className="ms-5" src="https://image.cermati.com/v1428073854/brands/avqoa9rfng8bklutfhm6.jpg" alt="" style={paymentLogoStyle}/>
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bsi"  value={"bsi"} checked={bank==="bsi"}  onChange={selectBank }/>
                <label className="form-check-label mx-1" htmlFor="bsi">
                    BSI
                </label>
                <img className="ms-5" src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2024/05/18/844286622.png" alt="" style={paymentLogoStyle}/>
            
            </div>
        </div>
        <br />
        
        <h5>Total price to pay: Rp {totalPayment.toLocaleString()}</h5>
        <br />

        <div className="col ">
            <button type="button" className="btn btn-primary btn-md" onClick={()=> {generatePaymentInfo(bank); onSetPage("paymentInfo");} }> Process Payment </button>
        </div>
    </div>
  );
}

export default Checkout