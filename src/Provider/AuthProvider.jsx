import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase_Config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
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
    const authInfo = {user, loading, createUser, signIn}
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