import React from "react";

export default function UploadItem(){

    const inputStyle = {height:"32px"};
    const labelStyle = {height:"32px", width:"156px", background:"blue", color:"white"};
    const areaStyle = {height:"128px"};
    const areaLabelStyle = {height:"128px", width:"156px", background:"blue", color:"white"};

    const dealerLocation = [
    "Jakarta1",
    "Bekasi1",
    "Bandung1",
    "Jogjakarta1",
    "Surabaya1",
    "Samarinda1",
    "Banjarmasin1",
    "Pontianak1",
    "Palangkaraya1",
    "Batam1",
    "Bengkulu1",
    "Padang1",
    "Banda Aceh1",
    "Denpasar1",
    "Makasar1",
    "Manado1",
    

    ];

    return(
        <div className="container my-4">
            <h5 className="text-center">Upload Item</h5><br />

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Brand</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Input brand here..." />
            </div>
            
            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Category</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Input category here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Product Id</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Put product id here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Product Name</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Put product name here..."/>
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={areaLabelStyle}>Description</h6>
                <textarea type="text" className="form-control" style={areaStyle} placeholder="Put Description here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Price</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Put item price here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Stock</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Put item stock here..."/>
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Image</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Put image link here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Dealer Location</h6>
                <select className="form-select" id="inputGroupSelect01" style={inputStyle}>
                    <option value="Jakarta1" key="select" >Jakarta1</option>
                        {dealerLocation.map((shop)=>(
                            <option value={shop} key={shop}>{shop}</option>
                        ))}

                </select>
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Promo Type</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Input promo type here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Discount</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Input discount here..." />
            </div>

            <div className="input-group mb-3">
                <h6 className="input-group-text" style={labelStyle}>Seller Id</h6>
                <input type="text" className="form-control" style={inputStyle} placeholder="Input seller id here..." />
            </div>
        </div>
    );
}
