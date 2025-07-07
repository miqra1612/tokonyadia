import React from 'react'
 
function Offer (){
  return (
    <div className="my-5">
        
        <h6><b>Special Offer</b></h6>
        <div className="form-check col my-auto">
            <div className="position-absolute">
                <input className="form-check-input " type="checkbox" value="" id="discountChk"/>
                <label className="form-check-label" htmlFor="discountChk"><h6>Discount</h6></label>
            </div>
            
            <br />
            <div className="position-absolute my-auto">
                <input className="form-check-input" type="checkbox" value="" id="get1Chk"/>
                <label className="form-check-label" htmlFor="get1Chk"><h6>Buy 1 Get 1</h6></label>
            </div>
           
            <br />
            <div className="position-absolute my-auto">
                <input className="form-check-input " type="checkbox" value="" id="bundleChk"/>
                <label className="form-check-label" htmlFor="bundleChk"><h6>Bundle</h6></label>
            </div>
            
        </div>
    </div>
  )
}

export default Offer