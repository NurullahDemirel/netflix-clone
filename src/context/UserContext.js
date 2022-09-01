import {auth ,db} from "../Firebase";

import {createContext, useEffect, useState} from "react";

import {signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

import {setDoc,doc} from "firebase/firestore"

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const signUp = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password);
          setDoc(doc(db,'users', email),{
             savedShows: []
         })
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {//unmounted
            unsubscribe()
        }
    }, []);

    return <UserContext.Provider value={{signUp,logOut,logIn,user}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;