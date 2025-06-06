import React from 'react';
import ItemList from './ItemList';

export default function ShopItem(){
    let promoStyle = { background: "#f0932b" };
    return(
        
        <div>
           <div className="container-fluid ">
                <div className="row row-cols-auto">
 
                    <div className="col">
                        <div className="card" style={{width: "8rem", height:"20rem"}}>
                            <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/105/MTA-128429556/no_brand_beras_ayam_pelung_25kg_full01_dl5rxy05.jpg" 
                            className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text"></p>
                                <h6 className="card-title">Rp 75.000</h6>
                                
                                <a href="#" className="btn btn-primary">order</a>
                            </div>
                        </div>
                        <br/>
                    </div>
                
                </div>
            </div>
        </div>
    );
}