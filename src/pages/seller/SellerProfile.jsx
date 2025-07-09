import React from "react";

export default function SellerProfile({currentAccount}){
    const imageStyle = {height: "256px", width:"256px", borderRadius:"16px"}
    return(
        <div className ="container-fluid my-4">
                <h5 className="text-center">Seller Profile</h5><br />

                <div className="row ">
                    
                    <div className="col mx-auto mb-2">  
                        <img src="https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/06/13091225/iStock-157644719.jpg" alt="..." style={imageStyle} />

                    </div>
                    
                    

                    <div className="col mx-auto text-start">
                       
                        
                        <h6>Name: {currentAccount.name}</h6>
                        <br />

                        <h6>Phone: {currentAccount.phoneNumber}</h6>
                        <br />

                        <h6>Email: {currentAccount.email}</h6><br />

                        <h6>Address:</h6>
                        <h6>{ currentAccount.address}</h6>
                        <br />

                        <h6>Position: Staff Packaging</h6>
                        <br />

                        <h6>Dealer: Bekasi 1</h6>
                        
                    </div>
                </div>
                <br/>
            </div>   
    );
}