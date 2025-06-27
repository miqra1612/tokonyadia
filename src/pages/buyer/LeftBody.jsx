import React from 'react';
import ItemPrice from './ItemPrice';
import Location from './Location';
import Offer from './Offer';
import Brand from './Brand';

export default function LeftBody({onUpdatePrice}){
    let promoStyle = { background: "#f0932b" };
    return(
        <div>
            <h5>
                <ItemPrice onUpdatePrice = {onUpdatePrice}/>
            </h5>
            <h5>
                <Location/>
            </h5>
            <h5>
                <Offer/>
            </h5>
            <h5>
                <Brand/>
            </h5>
        </div>
    );
}