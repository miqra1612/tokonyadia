import React from 'react'

function Location (){
  return (
    <div className="my-5">
        
        <h6><b>Location</b></h6>
        <select className="form-select" id="inputGroupSelect01">
            <option value="Jakarta" key="select">Jakarta</option>
            {shopLocation.map((city)=>(
                <option value={city} key={city}>{city}</option>
            ))}

        </select>
    </div>
  )
}

export default Location

const shopLocation = [
    "Jakarta",
    "Bekasi",
    "Bandung",
    "Jogjakarta",
    "Surabaya",
    "Samarinda",
    "Banjarmasin",
    "Pontianak",
    "Palangkaraya",
    "Batam",
    "Bengkulu",
    "Padang",
    "Banda Aceh",
    "Denpasar",
    "Makasar",
    "Manado",
    

]