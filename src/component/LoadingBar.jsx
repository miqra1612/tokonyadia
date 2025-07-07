import React, { useState } from 'react'

function LoadingBar({toggleLoading = false, loadingText = "Please Wait..."}) {
    const modalStyle = { 
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        color:"#f6e58d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999", 
    };

    if(toggleLoading){
        return (
        
        <div style={modalStyle}>
            <div className="d-flex justify-content-center ">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    
                </div>
                <strong className="mx-2">{loadingText}</strong>
            </div>
        </div>
        );
    }
  
    return (
        null
    );
}

export default LoadingBar