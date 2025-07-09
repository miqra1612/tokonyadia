import React from 'react'
import SellerProfile from './SellerProfile'
import SellerNavbar from './SellerNavbar'
import UploadItem from './UploadItem';

function SellerDashboard ({onSetValue, setPage, user, currentAccount}) {
  return (
    <>
      {
        <SellerNavbar onSetValue = {onSetValue} setPage={setPage} user = {user}/>
      //<SellerProfile currentAccount = {currentAccount}/>
      }

       <UploadItem/>
    </>
  );
}

export default SellerDashboard