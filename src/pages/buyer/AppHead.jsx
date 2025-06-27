import React, { useState, useEffect } from "react";
import WindowScaler from "../../component/WindowScaler";

export default function AppHead({setPage, onSetSearch, user}){
    let headStyle = {background: "white"}
    
    const [searchKey, setSearchKey] = useState("");

    const updatedKey = (e) =>{
        setSearchKey(e.target.value);
    }

    const searchItem = () => {
        onSetSearch(searchKey);
        setPage("home");
        
    }

    //Region Show Logo
    const screenWidth = WindowScaler();
    const isMobile = screenWidth < 1200;
    
    //End Region

    return(
        <div style={headStyle}>
            <div className="container">
                
                <div className="row py-2">
                    <div className="col-2">
                       
                    {  
                        isMobile === false? <img src={`${process.env.PUBLIC_URL}/icon/logo2.png`} style={{width:"170px", height:"43px", borderRadius:"12px"}}/>:
                        <img className="align-self-center" src={`${process.env.PUBLIC_URL}/logo512.png`} style={{ width:"50px", height:"50px",borderRadius:"12px"}}/>
                    }

                    </div>
                    <div className="col">
                        <form className="d-flex">
                            <input type="text" className="form-control w-75" placeholder="Search Item..." aria-label="Search" onChange={updatedKey}/>
                            
                            <button className="btn btn-outline-secondary ms-2" type="button" id="searchBtn" onClick={searchItem}>Search</button>

                            {user !== null?
                            <button className="btn btn-outline-success ms-2" type="button" id="cardBtn" onClick={()=> setPage("cart")}>
                            
                            <img src={`${process.env.PUBLIC_URL}/icon/trolley.png`} width="30" height="30" alt="" />
                                Cart
                            </button> : <></>
                            }
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}