import React, { useState, useEffect } from "react";


export default function AppHead({setPage, onSetSearch}){
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
    const [showLogo, setShowLogo] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () =>{
            setShowLogo(window.innerWidth);
        
        };

        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    
    //End Region

    return(
        <div style={headStyle}>
            <div className="container">
                
                <div className="row py-2">
                    <div className="col-2">
                       
                    {  
                        showLogo>1200? <img src="./icon/logo2.png" style={{width:"170px", height:"45px", borderRadius:"12px"}}/>:null
                    }

                    </div>
                    <div className="col">
                        <form className="d-flex">
                            <input type="text" className="form-control w-75" placeholder="Search Item..." aria-label="Search" onChange={updatedKey}/>
                            
                            <button className="btn btn-outline-secondary ms-2" type="button" id="searchBtn" onClick={searchItem}>Search</button>
                            <button className="btn btn-outline-success ms-2" type="button" id="cardBtn" onClick={()=> setPage("cart")}>
                            
                            <img src="/icon/trolley.png" width="30" height="30" alt="" />
                                Cart
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}