import React, { useState } from 'react'

function ShopCart ({cart, onSetPage}){
    let imageStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}
    let boxItem = {background:"#c7ecee", borderRadius:"14px"}
    let btnStyle = {width:"60px", height:"30px"}
    
    const totalPrice = cart.reduce((sum, item) => sum + item.itemCount * item.itemPrice * 1000,0);

    const serviceCharge = 4000;

    const tax = ((totalPrice + serviceCharge)*10)/100;

    const totalPayment = totalPrice + serviceCharge + tax;
   
    function payItems (){
        alert("Payment Success \nPaid: Rp" + totalPayment.toLocaleString());
        onSetPage("home");
    }
   
  return (
    <>
            <div className="container">
                <br/> 
                {cart.map((item)=>(
                   
                    <div className="row my-4" style={boxItem}>
                        <div className="col-1 my-2">
                            <img className="" src={item.image} alt="..."  style={imageStyle}/>
                        </div>
                        <div className="col-3 text-start ms-4 my-auto">
                            <h6>{item.itemName} x {item.itemCount}</h6>
                            <br />
                            <div className="">
                                <button type="button" className="btn btn-primary btn-sm" style={btnStyle}> - </button>
                                <button type="button" className="btn btn-primary btn-sm ms-2" style={btnStyle}> + </button>
                                <button type="button" className="btn btn-primary btn-sm ms-2" style={btnStyle}> Delete </button>

                            </div>
                            
                            
                        </div>
                        <div className="col my-auto">
                            <h6 >Rp { (1000 * item.itemPrice * item.itemCount).toLocaleString()}</h6>
                        </div>
                        <br/> 
                    </div>
                    
                
                ))}
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
                 
            </div>
           
    </>
  )
}

export default ShopCart