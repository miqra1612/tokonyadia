import React, { useState } from 'react'
import WindowScaler from '../../component/WindowScaler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import UploadCart from '../../firebase/UploadCart';

function ShopCart ({cart, onSetPage}){
    let imageStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}
    let boxItem = {background:"#c7ecee", borderRadius:"14px"}
    let btnStyle = {width:"40px", height:"30px"}
    let btnMobileStyle = {width:"30px", height:"30px"}
    let imageMobileStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}
    
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price * 1000,0);

    const serviceCharge = 4000;

    const tax = ((totalPrice + serviceCharge)*10)/100;

    const totalPayment = totalPrice + serviceCharge + tax;
   
    function payItems (){
        alert("Payment Success \nPaid: Rp" + totalPayment.toLocaleString());
        onSetPage("home");
    }

    const screenWidth = WindowScaler();
    const isMobile = screenWidth < 1000;

    const mobileUI= (item)=>{
        return(
            <>
             { 
                   <div className="row row-cols-auto my-4" style={boxItem}>
                        <div className="col-1 my-auto">
                            <img className="" src={item.image} alt="..."  style={imageMobileStyle}/>
                        </div>
                        <div className="col text-start mx-auto my-auto">
                            <h6 className="mt-2" style={{width:"9rem"}}>{item.productName} x {item.quantity}</h6>
                            <h6 >Rp { (1000 * item.price * item.quantity).toLocaleString()}</h6>
                            <br />
                           
                            <button type="button" className="btn btn-primary btn-sm mb-2" style={btnMobileStyle}> - </button>
                            <button type="button" className="btn btn-primary btn-sm  mx-2 mb-2" style={btnMobileStyle}> + </button>
                            <button type="button" className="btn btn-primary btn-sm  mx-2 mb-2" style={btnMobileStyle}> <FontAwesomeIcon icon={faTrash}/> </button>

                            
                        </div>
                       
                        <br/> 
                    </div>
                
              }
            
            </>
        );
    }

    const wideUI = (item)=>{
        return(
            <>
            {
               
                   <div className="row my-4" style={boxItem}>
                        <div className="col-1 my-auto">
                            <img className="" src={item.image} alt="..."  style={imageStyle}/>
                        </div>
                        <div className="col justify-content-end mx-4 my-auto">
                            <h6>{item.productName} x {item.quantity}</h6>
                            
                            
                        </div>
                        <div className="col my-auto justify-content-end">
                            <h6 >Rp { (1000 * item.price * item.quantity).toLocaleString()}</h6>
                        </div>
                        <div className="col my-auto">
                                <button type="button" className="btn btn-primary btn-sm mx-2" style={btnStyle}> - </button>
                                <button type="button" className="btn btn-primary btn-sm mx-2" style={btnStyle}> + </button>
                                <button type="button" className="btn btn-primary btn-sm mx-2" style={btnStyle}> <FontAwesomeIcon icon={faTrash}/> </button>

                        </div>
                        
                        <br/> 
                    </div> 
               
            }
            
            </>
        );
    }

    const wideCount =()=>{
        return(
            <>
            <div className="row justify-content-center mb-4">
                    <div className="col-2 text-start my-auto">
                        <h5> Total Price: </h5> 
                        <h5> Service Fee: </h5> 
                        <h5> Tax 10%: </h5> 
                        <h5 style={{color:"green"}}> Total Payment: </h5> 
                    </div>
                    <div className="col-4 text-end my-auto">
                        <h5> Rp {totalPrice.toLocaleString()}</h5> 
                        <h5> Rp {serviceCharge.toLocaleString()}</h5> 
                        <h5> Rp {tax.toLocaleString()}</h5> 
                        <h5 style={{color:"green"}}> Rp {totalPayment.toLocaleString()}</h5> 
                    </div>
                    <div className="col-4 ">
                        <button type="button" className="btn btn-primary btn-md" onClick={payItems}> Process Payment </button>
                    </div>
                 </div>
            </>
        );
    }

    const mobileCount =()=>{
        return(
            <>
            <div className="row mb-4">
                    <div className="col text-start my-auto">
                        <h6> Total Price: </h6> 
                        <h6> Service Fee: </h6> 
                        <h6> Tax 10%: </h6> 
                        <h6 style={{color:"green"}}> Total Payment: </h6> 
                    </div>
                    <div className="col text-end my-auto">
                        <h6> Rp {totalPrice.toLocaleString()}</h6> 
                        <h6> Rp {serviceCharge.toLocaleString()}</h6> 
                        <h6> Rp {tax.toLocaleString()}</h6> 
                        <h6 style={{color:"green"}}> Rp {totalPayment.toLocaleString()}</h6> 
                    </div>

                    <button type="button" className="btn btn-primary btn-md" onClick={payItems}> Process Payment </button>
                    
                 </div>
            </>
        );
    }


   
  return (
    <>
            <div className="container">
                <br/> 
                {cart.map((item)=>(
                   
                    isMobile? mobileUI(item) : wideUI(item)
                    
                
                ))}
                
                {isMobile? mobileCount() : wideCount()}
                
                {UploadCart(cart)}

            </div>
           
    </>
  )
}

export default ShopCart