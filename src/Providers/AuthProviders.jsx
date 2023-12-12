import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
const auth = getAuth(app)
const AuthContext = createContext(null)
const AuthProviders = (children) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    //new user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user signin with email password
    const signInWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }
    //profile update of user
    const userProfileUpdate = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }



    const authInfo = {
        user,
        loading,
        createUser,
        signInWithPassword,
        userProfileUpdate
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProviders;