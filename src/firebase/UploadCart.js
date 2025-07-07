import { getFirestore, doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
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
            promoType: p.promoType,
            quantity: p.quantity,
    }));

    
        const db = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;
        if(!user) return;

    function mergingItem(newItem, oldItem = []){
        let mergedItem = [...oldItem];

        for(const item of newItem){
            const existIndex = mergedItem.findIndex( (p) => p.productId === item.productId);

            if(existIndex >= 0){
                mergedItem[existIndex].quantity = item.quantity; 
            }
            else{
                mergedItem.push( item );
            }
        }

        return mergedItem;
    }

    try {
        const cartRef = doc(db, "carts", user.uid);

        const oldCart = await getDoc(cartRef);

        let finalCart = [];

        if(oldCart.exists()){
            const lastCartData = oldCart.data();
            finalCart = mergingItem(cleanItem, lastCartData.items||[]);
        }
        else{
            finalCart = cleanItem;
        }
        
        await setDoc(cartRef,{
            buyerId: user.uid,
            items: finalCart,
            timestamp: serverTimestamp(),
        });

        console.log("success upload cart");
    

    } catch (error) {
        alert(error.message);
    }

}

export default UploadCart