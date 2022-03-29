import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '../../Config/FireBase';   

const auth=getAuth(app);

function useAuthentication() {
    const [user,setUser]=useState();

    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //console.log(user)
              } else {
                setUser();
              }
        })
        return unsubscribeFromAuthStatuChanged;
    }, [])  
  return (
    user
  )
}

export default useAuthentication