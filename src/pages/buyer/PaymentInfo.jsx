import React from 'react'

function PaymentInfo ({paymentInfo, setPage}){
  return (
    <div className="container text-start my-4">
        <h5>Your total payment: Rp {paymentInfo.totalPayment.toLocaleString()}</h5>
        <br />
        <p>Transfer your payment into</p>
        <h5>{paymentInfo.bankName} : {paymentInfo.transferAccount} </h5>
        <br />
        <p>before</p>
        <h5>{paymentInfo.EndPaymentTime} WIB</h5>
        <p>for your orders to be process. Any orders that paid after 14:00 WIB will be delivered on the next day.</p>
        <p>Thank you for shopping with us.</p>

        <button type="button" className="btn btn-primary btn-md" onClick={()=> setPage("home") }> Back to Home </button>
    </div>
  );
}

export default PaymentInfo