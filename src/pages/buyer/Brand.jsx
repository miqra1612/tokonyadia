import React from 'react'

function Brand(){
  return (
    <div className="my-5">
        <br />
        <h6><b>Brand</b></h6>
        <select className="form-select" id="brand">
            <option value="Choose" key="select">Choose Brand</option>
            {brandName.map((brand)=>(
                <option value={brand} key={brand}>{brand}</option>
            ))}

        </select>
    </div>
  )
}

export default Brand

const brandName = [
    "Ayam Jago",
    "Raja Lele",
    "Indofood",
    "ABC",
    "SGM",
    "Prenagen",
    "Coca Cola",
    "Ichitan",
    "Nescafe",
    "Ultra",
    "Gelas",
    "Pucuk",
    "Korea",
    "Wingscorp",
    "Lokal",
    "Sidu",
    "Pilot",
    "Standard"
]