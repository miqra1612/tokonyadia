import logo from './logo.svg';
import './App.css';
import AppNavbar from './component/AppNavbar';
import Promo from './component/Promo';
import AppBody from './component/AppBody';
import AppHead from './component/AppHead';
import AppFooter from './component/AppFooter';
import { useEffect, useState } from 'react';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import Register from './component/Register';
import Login from './component/Login';
import ShopCart from './component/ShopCart';

function App() {
  
  
  const [itemValue, setValue] = useState({
    tipe: " ",
    minPrice: 0,
    maxPrice: 9999999999,
    promoType:" "
  });

  //Region Price Filter
  const updateItemType = (itemType)=>{
      setValue(prevState => ({...prevState, tipe:itemType }))
  }

  const updateMinMaxPrice = (minValue,maxValue)=>{
      setValue(prevState => ({...prevState, minPrice:minValue, maxPrice:maxValue }))
  }
  //End Region

  //Region Item Search
  const [searcItem, setSearchItem] = useState("");

  const updateSeach = (item) => {
    setSearchItem(item);
  
  }
  //End Region

  //Region ItemCart
  const [itemCart,setCart] = useState([]);
  
  const updateShopCart = (item)=>{
    
      setCart(prevCart => [...prevCart, item ]);
  }; 

  //End Region

  //Region Register
  const [account, setAccount] = useState([]);

  const registerAccount = (account)=>{
    
      setAccount(prevAccount => [...prevAccount, account ]);
  }; 
  //End region


  //Region Page
  const [selectedPage, setSelectedPage] = useState("home");

  const setPage = (currentPage)=>{
      setSelectedPage(currentPage);
  }

  function SelectPage(){
    
    switch(selectedPage){
      case "cart":
        return <ShopCart cart = {itemCart} onSetPage={setPage}/>;
      case "register":
        return <Register account = {account} onRegisterAccount ={registerAccount} onSetPage={setPage}/>;
      case "login":
        return <Login account = {account} onSetPage={setPage}/>;
      case "home":
        return <AppBody itemValue = {itemValue} onUpdatePrice = {updateMinMaxPrice} itemCart = {itemCart} onUpdateShopCart = {updateShopCart} searchValue = {searcItem}/>;
          
      default:
        return  <AppBody  itemValue = {itemValue} onUpdatePrice = {updateMinMaxPrice} itemCart = {itemCart} onUpdateShopCart = {updateShopCart} searchValue = {searcItem}/>;
          
      }
  }

  //End Region

 
 

  return (
    <div className="App">
      <div className="fixed-top">
        <AppNavbar onSetValue = {updateItemType} setPage={setPage}/>
        <AppHead setPage = {setPage} onSetSearch={updateSeach}/>

      </div>
      <Promo/>
      
        {
          SelectPage(selectedPage)
          
        }
      <AppFooter/>
    </div>
  );
}

export default App;

 
