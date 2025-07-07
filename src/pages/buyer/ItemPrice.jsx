import React, { useState } from 'react'

function ItemPrice ({onUpdatePrice}){
  
  const [value, setValue] = useState({
    minPrice:0, 
    maxPrice:10000000
  });

  const updateMin = (minValue) =>{
    const cleanMin = parseInt(minValue.replace(/[^0-9-]/g, ''), 10);
    setValue(prev => ({...prev, minPrice:cleanMin}));
  }

  const updateMax = (maxValue) =>{
    const cleanMax =  parseInt(maxValue.replace(/[^0-9-]/g, ''), 10);
    setValue(prev => ({...prev, maxPrice:cleanMax}))
  }

  const maxValue = value.maxPrice.toLocaleString();
  const minValue = value.minPrice.toLocaleString();

  

  return (
    <div className="col">
        <h6><b>Price Range</b></h6>

        <form>
            <input type="text" className="form-control my-2" placeholder="Min Price..." aria-label="Min_Price" value= {minValue} onChange={(e) => {updateMin(e.target.value)}}/>
            <input type="text" className="form-control my-2" placeholder="Max Price..." aria-label="Max_Price" value = {maxValue} onChange={(e) => {updateMax(e.target.value)}}/>
            
            <button className="btn btn-outline-secondary my-2" type="button" id="searchBtn" onClick={(min,max)=> onUpdatePrice(value.minPrice,value.maxPrice)}>Search</button>
            
        </form>
    </div>
  )
}

export default ItemPrice