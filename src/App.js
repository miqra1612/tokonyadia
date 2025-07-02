import logo from './logo.svg';
import './App.css';
import AppNavbar from './component/AppNavbar';
import Promo from './pages/buyer/Promo';
import AppBody from './pages/buyer/AppBody';
import AppHead from './pages/buyer/AppHead';
import AppFooter from './component/AppFooter';
import { useEffect, useState } from 'react';
import Register from './pages/buyer/Register';
import Login from './pages/buyer/Login';
import ShopCart from './pages/buyer/ShopCart';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from './firebase/firebaseConfig';
import UploadCart from './firebase/UploadCart';
import { doc,getDoc } from 'firebase/firestore';
import { items } from './pages/seller/ItemsData';


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

      setCart(prevCart => {
        const existingItem = prevCart.find((oldItem) => oldItem.productName === item.productName);

        if(existingItem){
          const updatedCart = prevCart.map((oldItem) => oldItem.productName === item.productName ?
                              {...oldItem, quantity: oldItem.quantity + item.quantity}: oldItem);
                              
          return updatedCart;
        }
        else{
          return [...prevCart, item ];
        }
        
      });

      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart):[];
  } 

   useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(itemCart));
   }, [itemCart]);

   useEffect(() => {
        const handleUnload = () => {
          UploadCart(itemCart);
        };
        window.addEventListener("beforeunload", handleUnload);
        return () => window.removeEventListener("beforeunload", handleUnload);
  }, [itemCart]);

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

 
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribeUser = onAuthStateChanged(auth, async (currentUser) => {
        if(currentUser){
          //alert("Wellcome Back " + currentUser.email);
          setUser(currentUser);

          const cartdData = doc(db, "carts", currentUser.uid);
          const cartSnapshot = await getDoc(cartdData);

          if(cartSnapshot.exists()){
            const snapData = cartSnapshot.data();
            const snapItems = snapData.items ||[]

            snapItems.map( item => {
              const getItem = items.find( (p) => p.id ===  item.productId);
              getItem ? item.image = getItem.image : item.image = null;
              
            });

            setCart(snapItems);
           
          }

           
        }
        else{
          setUser(null);
        }
      });

      return () => unsubscribeUser();
    }, []);
 
 

  return (
    <div className="App">
      <div className="fixed-top">
        <AppNavbar onSetValue = {updateItemType} setPage={setPage} user = {user}/>
        <AppHead setPage = {setPage} onSetSearch={updateSeach} user = {user}/>

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

 
