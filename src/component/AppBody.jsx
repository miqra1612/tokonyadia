import React from 'react';
import LeftBody from './LeftBody';
import ShopItem from './ShopItem';
import ItemList from './ItemList';
import Tester from './Tester';


export default function AppBody({ itemValue, onUpdatePrice, itemCart, onUpdateShopCart, searchValue}){
    let promoStyle = { background: "#dff9fb" };
    return(
        <div style={promoStyle}>
            <div className ="container">
                <br/> 
                <div className="row">
                    <div className="col-2">
                        <LeftBody onUpdatePrice = {onUpdatePrice}/>
                    </div>
                    <div className="col">
                        <ItemList itemValue = {itemValue} itemCart = {itemCart} onUpdateShopCart = {onUpdateShopCart} searchValue ={searchValue}/>
                       
                    </div>
                </div>
                <br/>
            </div>   
        </div>
    );
}