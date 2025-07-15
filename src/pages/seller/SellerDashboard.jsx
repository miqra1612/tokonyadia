import React from 'react'
import SellerProfile from './SellerProfile'
import SellerNavbar from './SellerNavbar'
import UploadItem from './UploadItem';
import ItemDetails from './ItemDetails';

function SellerDashboard ({onSetValue, setPage, user, currentAccount}) {
  return (
    <>
      {
        <SellerNavbar onSetValue = {onSetValue} setPage={setPage} user = {user}/>
      //<SellerProfile currentAccount = {currentAccount}/>
      //<UploadItem/>
      
      }
      <ItemDetails/>
       
    </>
  );
}

export default SellerDashboard