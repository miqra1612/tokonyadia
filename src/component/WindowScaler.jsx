import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

function WindowScaler(){
     
        const [screenWidth, setScreenWidth] = useState(()=> {
            if (typeof window !== 'undefined') {
                    return window.innerWidth;
            }
            return 0;
        });
    
        useEffect(()=>{
            const handleResize = () =>{
                setScreenWidth(window.innerWidth);
            
            };
    
            window.addEventListener("resize", handleResize);
    
            return () =>{
                window.removeEventListener("resize", handleResize);
            }
        }, []);
        
       
  return screenWidth;
}

WindowScaler.propTypes = {}

export default WindowScaler