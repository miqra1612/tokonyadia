import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Checkout({user, cart}){
    
    const paymentStyle = { border:"2px solid orange", borderRadius:"5px" };
    const paymentLogoStyle = { height:"32px", width:"64px" };
    const boxItem = {background:"#c7ecee", borderRadius:"14px"}
    const imageStyle = {width: "6rem", height: "6rem",  borderRadius:"14px"}

    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price,0);

    const serviceCharge = 20000;

    const tax = ( totalPrice * 10 )/ 100;

    const totalPayment = totalPrice + serviceCharge + tax;
    
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
        <h6>User : {user.name}</h6>
        <br />
        
        <h6>Address</h6>
        <p>{user.address}</p>
        <br />

        <div>
        <h6>Items</h6>
            {cart.map((item)=> (
                wideUI(item)
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
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="mandiri"/>
                <label className="form-check-label mx-1" htmlFor="mandiri">
                    Mandiri
                </label>
                <img className="ms-4" src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayojakarta/images/post/articles/2021/06/07/34953/o_1b2plgvck1jng1mma1mv81apcf99a.jpg" alt="" style={paymentLogoStyle} />
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bri"/>
                <label className="form-check-label mx-1" htmlFor="bri">
                   BRI
                </label>
                <img className="ms-5" src="https://tuwaga.id/wp-content/uploads/2025/01/FI004-_-BRI-9.png" alt="" style={paymentLogoStyle} />
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bni"/>
                <label className="form-check-label mx-1" htmlFor="bni">
                    BNI
                </label>
                <img className="ms-5" src="https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/6491bee525769f3d615b7ac3_bni_bank.webp" alt="" style={paymentLogoStyle}/>
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bca"/>
                <label className="form-check-label mx-1" htmlFor="bca">
                    BCA
                </label>
                <img className="ms-5" src="https://image.cermati.com/v1428073854/brands/avqoa9rfng8bklutfhm6.jpg" alt="" style={paymentLogoStyle}/>
            
            </div>

            <div className="form-check my-3 py-3" style={paymentStyle}>
                <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="bsi"/>
                <label className="form-check-label mx-1" htmlFor="bsi">
                    BSI
                </label>
                <img className="ms-5" src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2024/05/18/844286622.png" alt="" style={paymentLogoStyle}/>
            
            </div>
        </div>
        <br />
        
        <h5>Total price to pay: Rp {totalPayment.toLocaleString()}</h5>
        <br />

        <div className="col-4 ">
            <button type="button" className="btn btn-primary btn-md" > Process Payment </button>
        </div>
    </div>
  );
}

export default Checkout