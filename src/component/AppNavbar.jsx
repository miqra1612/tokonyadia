import React, { useState } from 'react';


export default function AppNavbar({onSetValue, setPage, onToggleLogo}){
    let btnStyle = {  };



    return(
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#f6e58d"}}>
                <div className="container-fluid">
                     
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onToggle={(e) => { alert(e.isExpanded); onToggleLogo(e.isExpanded);}}>
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className="d-flex position-absolute end-0">
                            <button className="btn btn-outline-dark me-2" type="button" onClick={()=> setPage("login")}>Log in</button>
                            <button className="btn btn-outline-primary me-2" type="button" onClick={()=> setPage("register")}>Register</button>
                    </form>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item tex">
                            <a className="nav-link active " aria-current="page" href="#" onClick={ (e) =>  {onSetValue ("default"); setPage("home")}} style={btnStyle}>Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={ (e) =>  {onSetValue ("makanan"); setPage("home")}} style={btnStyle}>Food</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => {onSetValue ("minuman"); setPage("home")}} style={btnStyle}>Drink</a> 
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => {onSetValue ("electronic"); setPage("home")}} style={btnStyle}>Electronic</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => {onSetValue ("tools"); setPage("home")}} style={btnStyle}>Tools</a>
                            </li>
                        </ul>

                       
                    </div>

                     
                </div>
                
            </nav>
            
        </div>
    );
}