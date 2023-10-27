import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase_Config";
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = () => {
        setLoading(true);
        return auth.signOut();
    }
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                setUser(user);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
            }
        })
        return () => unsubscribe();
    } , [])
    const authInfo = {user, loading, createUser,googleSignIn, signIn, signOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;