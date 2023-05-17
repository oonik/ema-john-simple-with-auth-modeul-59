import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        loading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        loading(true)
        return signOut(auth);
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
          return ()=> unSubscribe();
    }, [])

    const authInfo = { user, loading, createUser, singIn, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;