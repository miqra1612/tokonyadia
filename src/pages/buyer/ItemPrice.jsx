import React, { useState } from 'react'

function ItemPrice ({onUpdatePrice}){
  
  const [value, setValue] = useState({
    minPrice:Number, 
    maxPrice:Number
  });

  const updateMin = (minValue) =>{
    setValue(prev => ({...prev, minPrice:minValue}));
  }

  const updateMax = (maxValue) =>{
    setValue(prev => ({...prev, maxPrice:maxValue}))
  }

  

  return (
    <div className="col">
        <h6><b>Price Range</b></h6>

        <form>
            <input type="number" className="form-control my-2" placeholder="Min Price..." aria-label="Min_Price" value= {value.minPrice} onChange={(e) => {updateMin(e.target.value)}}/>
            <input type="number" className="form-control my-2" placeholder="Max Price..." aria-label="Max_Price" value = {value.maxPrice} onChange={(e) => {updateMax(e.target.value)}}/>
            
            <button className="btn btn-outline-secondary my-2" type="button" id="searchBtn" onClick={(min,max)=> onUpdatePrice(value.minPrice,value.maxPrice)}>Search</button>
            
        </form>
    </div>
  )
}

export default ItemPrice