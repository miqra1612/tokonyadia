import React, {useState} from 'react';
import LeftBody from './LeftBody';
import ShopItem from './ShopItem';
import ItemList from './ItemList';
import Tester from './Tester';
import WindowScaler from './WindowScaler';
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
            <button type="button" className="btn btn-primary" onClick={toggleMenu}> <FontAwesomeIcon icon={faFilter}/></button>
                         
        );
    }

    return(
        <div style={promoStyle}>
            <div className ="container">
                <br/> 
                <div className="row">
                    
                    <div className="col-2">
                        {
                            !isSmallScreen ? wideBody(): smallBody()
                        }
                       
                    </div>
                    <div className="col">
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