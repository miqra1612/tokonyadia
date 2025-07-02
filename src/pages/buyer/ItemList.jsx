import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { items } from '../seller/ItemsData';

function ItemList ({itemValue, itemCart, onUpdateShopCart, searchValue}) {
    let itemlist = items;
    let buttonStyle = { background: "#f0932b", color:"white" };

    //Region SortPrice
    const sortList = ()=>{
       if(itemValue.tipe === "default" || itemValue.tipe ===" "){
        itemlist = items;
       }
       else{
        itemlist = items.filter(t => t.tipe === itemValue.tipe);
       }

       if(searchValue !== ""){
        itemlist = itemlist.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()));
       }
    
       if(itemValue.minPrice > 0 ){
        
        itemlist = itemlist.filter(p => parseInt(p.price.replace(".","")) >= itemValue.minPrice);
       }

       if(itemValue.maxPrice > 0 ){
        
        itemlist = itemlist.filter(p => parseInt(p.price.replace(".","")) <= itemValue.maxPrice);
       }

       
    }
    //End Region

    //Region AddItem
   
    const AddItem= (item)=>{
        const shopItem = {
            discount:"",
            price:parseFloat(item.price),
            productId:item.id,
            productName: item.name,
            productType:item.tipe,
            promoType:"",
            quantity:1,
            image:item.image,
        };

        onUpdateShopCart(shopItem);
       
        //alert( itemCart.map((i)=>(i.itemName)+ "\n") );
          alert("add 1 item: " + shopItem.productName)  
    }

    return (
    <div>
        <div className="container-fluid "> {sortList()}
            <br/>
                <div className="row row-cols-auto">
                    {itemlist.map((p)=>( 
                        <div className="col" key={"col" + p.productId}>
                            <div className="card" style={{width: "8rem", height:"20rem",  borderRadius:"12px"}}>
                                <img src={p.image} className="card-img-top mx-auto my-2" alt="..." style={{width: "7rem", height: "8rem",  borderRadius:"8px"}}/>
                                <div className="card-body">
                                    <p className="card-text">{p.name}</p>
                                    
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x my-3"> 
                                        <h6 className="card-title" style={{width: "8rem", height:"20px"}}>Rp {p.price}</h6>
                                        <a href="#" className="btn" style={buttonStyle} key={"but"+p.productId} onClick={() => { AddItem(p); }}>Order</a>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                        </div>
                    ))}
                    
                
                </div>
        </div>
           
    </div>
  );
}

export default ItemList




