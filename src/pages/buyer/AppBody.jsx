import React, {useState} from 'react';
import LeftBody from './LeftBody';
import ShopItem from './ShopItem';
import ItemList from './ItemList';
import Tester from '../../component/Tester';
import WindowScaler from '../../component/WindowScaler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';

export default function AppBody({ itemValue, onUpdatePrice, itemCart, onUpdateShopCart, searchValue}){
    let promoStyle = { background: "#dff9fb" };

    const screenWidth = WindowScaler();
    const isSmallScreen = screenWidth < 1024;

    const [showMenu,setShowMenu] = useState(false);
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }

    function wideBody(){
        return(
         <LeftBody onUpdatePrice = {onUpdatePrice}/>
        );
    }

    function smallBody(){
       
        return(  
            <>
            <button type="button" className="btn btn-outline-light" onClick={toggleMenu} style={{ height:"30px", background:"#7ed6df"}}> <FontAwesomeIcon icon={faFilter}/></button>
            
            </>       
                         
        );
    }

    return(
        <div style={promoStyle}>
            <div className ="container-fluid">
               
                <div className="row ">
                    
                    {
                        isSmallScreen ? smallBody() :<div className={isSmallScreen? "col-1 ms-2": "col-2 mx-auto my-4"}> { wideBody() } </div>
                    
                    }

                    <div className="col-4 flex-grow-1 me-2">
                        
                        {
                           
                            !showMenu ? <ItemList itemValue = {itemValue} itemCart = {itemCart} onUpdateShopCart = {onUpdateShopCart} searchValue ={searchValue}/>
                                        :<LeftBody onUpdatePrice = {onUpdatePrice}/>
                        }
                        
                    </div>
                </div>
                <br/>
            </div>   
        </div>
    );
}