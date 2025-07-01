import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useState } from "react";

async function UploadCart(cart){
    
    if(!cart || cart.length === 0){
        console.log(" no cart updated");
        return;
    }

    const cleanItem = cart.map((p) => ({
            discount: p.discount,
            price: p.price * 1000,
            productId: p.productId,
            productName: p.productName,
            productType: p.productType,
            promoType: p.productType,
            quantity: p.quantity,
    }));

    
        const db = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;
        if(!user) return;

    try {
        const cartRef = doc(db, "carts", user.uid);

        await setDoc(cartRef,{
            buyerId: user.uid,
            items: cleanItem,
            timestamp: serverTimestamp(),
        });

        alert("success upload cart");
    

    } catch (error) {
        alert(error.message);
    }

}

export default UploadCart