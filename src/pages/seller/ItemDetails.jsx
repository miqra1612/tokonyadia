import React from "react";

export default function({selectedItem}){
    const imageStyle = {height: "256px", width:"256px", borderRadius:"16px"};

    return(
        <div className="container my-3">
            <h3 className="text-center"> Item Details</h3>

            <div className="row mt-5">
                    
                    <div className="col mx-auto mb-2">  
                        <img src="https://pasarsegar.co.id/wp-content/uploads/2022/12/image_picker4976567524682763971-1.jpg" alt="..." style={imageStyle} />

                    </div>
                    
                    <div className="col mx-auto text-start">
                        
                        <h6>Name: es campur</h6>
                        <br />

                        <h6>Product ID: br999</h6>
                        <br />

                        <h6>Price: Rp 999.999.999</h6><br />

                        <h6>Stock:  9999</h6>
                        <br />

                        <h6>Description: es batu dikasi cendol</h6>
                        <br />

                        <h6>Promo Type: Buy 5 get 1</h6>
                        <br />

                        <h6>Discount: 100%</h6>
                        <br />

                        <h6>Dealer: Bekasi 1</h6>
                        
                    </div>
                </div>
                <br/>

        </div>
    );
}